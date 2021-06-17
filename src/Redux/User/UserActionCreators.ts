import { IUser } from '../../Interfaces/UserInterfaces'
import * as userActions from './UserActionTypes'

export const googleSignInStart = (): userActions.GoogleSignInStart => ({
  type: userActions.GOOGLE_SIGN_IN_START
})

export const signInSuccess = (user: IUser): userActions.SignInSuccess => ({
  type: userActions.SIGN_IN_SUCCESS,
  payload: user
})

export const signOut= (): userActions.SignOut => ({
  type: userActions.SIGN_OUT
})
