import * as userTypes from './UserActionTypes'

import { IUser } from '../../Interfaces/UserInterfaces'
import { UserTypes } from './UserActionTypes'

export interface IUserState {
  currentUser: IUser | null,
  isLoading: boolean,
  authenticationError: string | null
}

const INITIAL_STATE: IUserState = {
  currentUser: null,
  isLoading: false,
  authenticationError: null
}

const userReducer = (state = INITIAL_STATE, action: UserTypes) => {
  switch (action.type) {
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false
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

    case userTypes.RESET_AUTHENTICATION_ERROR:
      return {
        ...state,
        authenticationError: null
      }

    default:
      return state
  }
}

export default userReducer
