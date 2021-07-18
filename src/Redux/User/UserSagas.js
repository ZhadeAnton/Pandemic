import {takeLatest, put, all, call} from 'redux-saga/effects'
import { v4 } from 'uuid'

import * as userTypes from './UserActionTypes'
import * as userActions from './UserActionCreators.ts'
import * as utils from '../../Utils/UserUtils.ts'
import * as generalActions from '../General/GeneralActionCreators'
import {auth, googleProvider, facebookProvider} from '../../Firebase/firebase.config'

function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(utils.creacteUserProfileDocument, userAuth, additionalData)
    const userSnapshot = yield userRef.get()
    yield put(userActions.signInSuccess({
      id: userSnapshot.id,
      cart: [],
      ...userSnapshot.data()
    }))
  } catch (error) {
    yield put(generalActions.addNotification('ERROR', error.message, v4()))
    yield put(userActions.authError())
  }
}

function* signInWithGoogle() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider)
    yield getSnapshotFromUserAuth(user)
    yield put(generalActions.addNotification(
        'SUCCESS', 'You are successfully logged in!', v4()))
  } catch (error) {
    yield put(generalActions.addNotification('ERROR', error.message, v4()))
    yield put(userActions.authError())
  }
}

function* signInWithFacebook() {
  try {
    const {user} = yield auth.signInWithPopup(facebookProvider)
    yield getSnapshotFromUserAuth(user)
    yield put(generalActions.addNotification(
        'SUCCESS', 'You are successfully logged in!', v4()))
  } catch (error) {
    yield put(generalActions.addNotification('ERROR', error.message, v4()))
    yield put(userActions.authError())
  }
}

function* signUpWithEmail({payload: {email, password, displayName}}) {
  try {
    const {user} = yield auth.createUserWithEmailAndPassword(email, password)
    yield getSnapshotFromUserAuth(user, {displayName})
    yield put(userActions.signUpSuccess())
    yield put(generalActions.addNotification(
        'SUCCESS', 'You are successfully registred with email!', v4()))
  } catch (error) {
    yield put(generalActions.addNotification('ERROR', error.message, v4()))
    yield put(userActions.authError())
  }
}

function* signInWithEmail({payload: {email, password}}) {
  try {
    const {user} = yield auth.signInWithEmailAndPassword(email, password)
    yield getSnapshotFromUserAuth(user)
    yield put(generalActions.addNotification(
        'SUCCESS', 'You are successfully logged in!', v4()))
  } catch (error) {
    yield put(generalActions.addNotification('ERROR', error.message, v4()))
    yield put(userActions.authError())
  }
}

function* signOut() {
  try {
    yield auth.signOut()
    yield put(userActions.signOutSuccess())
    yield put(generalActions.addNotification(
        'SUCCESS', 'You are successfully logged out!', v4()))
  } catch (error) {
    yield put(generalActions.addNotification('ERROR', error.message, v4()))
    yield put(userActions.authError())
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

function* onSignOut() {
  yield takeLatest(userTypes.SIGN_OUT, signOut)
}

export default function* userSagas() {
  yield all([
    call(onSignInWithGoogle),
    call(onSignInWithFacebook),
    call(onSignUpWithEmail),
    call(onSigInWithEmail),
    call(onSignOut)
  ])
}
