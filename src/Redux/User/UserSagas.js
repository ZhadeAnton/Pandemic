import {takeLatest, put, all, call} from 'redux-saga/effects'
import * as userTypes from './UserActionTypes'
import * as userActions from './UserActionCreators.ts'
import * as utils from './utils.ts'

import {auth, googleProvider} from '../../Firebase/firebase.config'

function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef =
    yield call(utils.creacteUserProfileDocument, userAuth, additionalData)
    const userSnapshot = yield userRef.get()
    yield put(userActions.signInSuccess({
      id: userSnapshot.id, ...userSnapshot.data()
    }))
  } catch (error) {
    console.log(error)
  }
}

function* signInWithGoogle() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    console.log(error)
  }
}

function* onSignInWithGoogle() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export default function* userSagas() {
  yield all([
    call(onSignInWithGoogle)
  ])
}
