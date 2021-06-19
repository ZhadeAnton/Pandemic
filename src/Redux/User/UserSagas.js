import {takeLatest, put, all, call} from 'redux-saga/effects'
import * as userTypes from './UserActionTypes'
import * as userActions from './UserActionCreators.ts'
import * as utils from './utils.ts'

import {auth, googleProvider, facebookProvider} from '../../Firebase/firebase.config'

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

function* signInWithFacebook() {
  try {
    const {user} = yield auth.signInWithPopup(facebookProvider)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    console.log(error)
  }
}

function* signUpWithEmail({payload: {email, password, displayName}}) {
  try {
    const {user} = yield auth.createUserWithEmailAndPassword(email, password)
    yield getSnapshotFromUserAuth(user, {displayName})
  } catch (error) {
    console.log(error)
  }
}

export function* signInWithEmail({payload: {email, password}}) {
  try {
    yield console.log(email, password)
    const {user} = yield auth.signInWithEmailAndPassword(email, password)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    console.log(error)
  }
}

function* onSignInWithGoogle() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

function* onSignInWithFacebook() {
  yield takeLatest(userTypes.FACEBOOK_SIGN_IN_START, signInWithFacebook)
}

function* onSignUpWithEmail() {
  yield takeLatest(userTypes.SIGN_UP_WITH_EMAIL, signUpWithEmail)
}

function* onSigInWithEmail() {
  yield takeLatest(userTypes.SIGN_IN_WITH_EMAIL, signInWithEmail)
}

export default function* userSagas() {
  yield all([
    call(onSignInWithGoogle),
    call(onSignInWithFacebook),
    call(onSignUpWithEmail),
    call(onSigInWithEmail)
  ])
}
