import * as userInterfaces from '../../Interfaces/UserInterfaces'
import * as userActions from './UserActionTypes'

export const signInWithGoogle = (): userActions.GoogleSignInStart => ({
  type: userActions.GOOGLE_SIGN_IN_START
})

export const signInWithFacebook = (): userActions.FacebookSignInStart => ({
  type: userActions.FACEBOOK_SIGN_IN_START
})

export const signInSuccess = (user: userInterfaces.IUser): userActions.SignInSuccess => ({
  type: userActions.SIGN_IN_SUCCESS,
  payload: user
})

export const signUpWithEmail = ({email, password, displayName: name}
  : userInterfaces.ISignUpWithEmail): userActions.SignUpWithEmail => ({
  type: userActions.SIGN_UP_WITH_EMAIL,
  payload: {email, password, displayName: name}
})

export const signInWithEmail = ({email, password} : userInterfaces.ISignInWithEmail)
  : userActions.SignInWithEmail => ({
  type: userActions.SIGN_IN_WITH_EMAIL,
  payload: {email, password}
})

export const signOut = (): userActions.SignOut => ({
  type: userActions.SIGN_OUT
})

export const signOutSuccess = (): userActions.SignOutSucess => ({
  type: userActions.SIGN_OUT_SUCCESS
})

export const authenticationError = (error: string): userActions.AuthenticationError => ({
  type: userActions.AUTHENTICATION_ERROR,
  payload: error
})

export const resetAuthenticationError = (): userActions.ResetAuthenticationError => ({
  type: userActions.RESET_AUTHENTICATION_ERROR
})
