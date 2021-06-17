import * as userTypes from './UserActionTypes'

import { IUser } from '../../Interfaces/UserInterfaces'
import { UserTypes } from './UserActionTypes'

export interface IUserState {
  currentUser: IUser | null,
  isLoading: boolean,
  userError: string | null
}

const INITIAL_STATE: IUserState = {
  currentUser: null,
  isLoading: false,
  userError: null
}

const userReducer = (state = INITIAL_STATE, action: UserTypes) => {
  switch (action.type) {
    case userTypes.GOOGLE_SIGN_IN_START:
      return {
        ...state,
        isLoading: true,
        userError: null,
      }

    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
      }

    case userTypes.SIGN_OUT:
      return {
        ...state,
        currentUser: null,
      }

    default:
      return state
  }
}

export default userReducer
