import * as userInterfaces from '../../Interfaces/UserInterfaces'
import * as userActions from './UserActionTypes'

export const googleSignInStart = (): userActions.GoogleSignInStart => ({
  type: userActions.GOOGLE_SIGN_IN_START
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

export const signOut= (): userActions.SignOut => ({
  type: userActions.SIGN_OUT
})
