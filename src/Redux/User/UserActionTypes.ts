import * as userInterfaces from '../../Interfaces/UserInterfaces'

export const GOOGLE_SIGN_IN_START = 'GOOGLE_SIGN_IN_START'
export interface GoogleSignInStart {
  type: typeof GOOGLE_SIGN_IN_START
}

export const FACEBOOK_SIGN_IN_START = 'FACEBOOK_SIGN_IN_START'
export interface FacebookSignInStart {
  type: typeof FACEBOOK_SIGN_IN_START
}

export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export interface SignInSuccess {
  type: typeof SIGN_IN_SUCCESS,
  payload: userInterfaces.IUser
}

export const SIGN_OUT = 'SIGN_OUT'
export interface SignOut {
  type: typeof SIGN_OUT
}

export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS'
export interface SignOutSucess {
  type: typeof SIGN_OUT_SUCCESS
}


export const SIGN_UP_WITH_EMAIL = 'SIGN_UP_WITH_EMAIL'
export interface SignUpWithEmail {
  type: typeof SIGN_UP_WITH_EMAIL,
  payload: userInterfaces.ISignUpWithEmail
}

export const SIGN_IN_WITH_EMAIL = 'SIGN_IN_WITH_EMAIL'
export interface SignInWithEmail {
  type: typeof SIGN_IN_WITH_EMAIL,
  payload: userInterfaces.ISignInWithEmail
}

export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR'
export interface AuthenticationError {
  type: typeof AUTHENTICATION_ERROR,
  payload: string
}

export const RESET_AUTHENTICATION_ERROR = 'RESET_AUTHENTICATION_ERROR'
export interface ResetAuthenticationError {
  type: typeof RESET_AUTHENTICATION_ERROR
}

export type UserTypes =
| GoogleSignInStart
| FacebookSignInStart
| SignInSuccess
| SignUpWithEmail
| SignInWithEmail
| SignOut
| SignOutSucess
| AuthenticationError
| ResetAuthenticationError
