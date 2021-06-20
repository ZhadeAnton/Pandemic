import * as userTypes from './UserActionTypes'

import { IUser } from '../../Interfaces/UserInterfaces'
import { UserTypes } from './UserActionTypes'

export interface IUserState {
  currentUser: IUser | null,
  authenticationError: string | null
  isSignUp: boolean,
  isSignIn: boolean,
  isLoading: boolean,
}

const INITIAL_STATE: IUserState = {
  currentUser: null,
  authenticationError: null,
  isSignUp: false,
  isSignIn: false,
  isLoading: false,
}

const userReducer = (state = INITIAL_STATE, action: UserTypes) => {
  switch (action.type) {
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isSignIn: true
      }

    case userTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        isSignUp: true
      }

    case userTypes.SIGN_OUT:
      return {
        ...state,
        currentUser: null,
      }

    case userTypes.AUTHENTICATION_ERROR:
      return {
        ...state,
        authenticationError: action.payload
      }

    case userTypes.RESET_AUTHENTICATION_MESSAGE:
      return {
        ...state,
        authenticationError: null,
        isSignUp: false,
        isSignIn: false
      }

    default:
      return state
  }
}

export default userReducer
