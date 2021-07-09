import * as userActions from './UserActionTypes'
import {
  ISignInWithEmail,
  ISignUpWithEmail,
  IUser } from '../../Interfaces/UserInterfaces'

export const signInWithGoogle = (): userActions.GoogleSignInStart => ({
  type: userActions.GOOGLE_SIGN_IN_START
})

export const signInWithFacebook = (): userActions.FacebookSignInStart => ({
  type: userActions.FACEBOOK_SIGN_IN_START
})

export const signInSuccess = (user: IUser): userActions.SignInSuccess => ({
  type: userActions.SIGN_IN_SUCCESS,
  payload: user
})

export const signUpWithEmail = ({email, password, displayName: name}: ISignUpWithEmail)
  : userActions.SignUpWithEmail => ({
  type: userActions.SIGN_UP_WITH_EMAIL,
  payload: {email, password, displayName: name}
})

export const signInWithEmail = ({email, password} : ISignInWithEmail)
  : userActions.SignInWithEmail => ({
  type: userActions.SIGN_IN_WITH_EMAIL,
  payload: {email, password}
})

export const signUpSuccess = (): userActions.SignUpSucess => ({
  type: userActions.SIGN_UP_SUCCESS
})

export const signOut = (): userActions.SignOut => ({
  type: userActions.SIGN_OUT
})

export const signOutSuccess = (): userActions.SignOutSucess => ({
  type: userActions.SIGN_OUT_SUCCESS
})

export const authMessage = (message: string): userActions.AuthenticationError => ({
  type: userActions.AUTHENTICATION_MESSAGE,
  payload: message
})

export const resetAuthMessage = (): userActions.ResetAuthMessage => ({
  type: userActions.RESET_AUTHENTICATION_MESSAGE
})
