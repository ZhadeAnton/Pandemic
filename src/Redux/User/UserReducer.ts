import * as userTypes from './UserActionTypes'
import * as cartTypes from '../Cart/CartActionTypes'
import { UserTypes } from './UserActionTypes'
import { CartTypes } from '../Cart/CartActionTypes'
import { IUser } from './../../Interfaces/UserInterfaces';

export interface IUserState {
  currentUser: IUser | null,
  authMessage: Array<string> | null,
  isLoading: boolean,
}

type UserReducer = UserTypes | CartTypes

const INITIAL_STATE: IUserState = {
  currentUser: null,
  authMessage: null,
  isLoading: false,
}

const userReducer = (state = INITIAL_STATE, action: UserReducer) => {
  switch (action.type) {
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        authMessage: ['You are successfully logged in!']
      }

    case userTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        authMessage: ['You are successfully signed up and logged in!']
      }

    case userTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        authMessage: ['You are successfully signed out!']
      }

    case userTypes.AUTHENTICATION_MESSAGE:
      return {
        ...state,
        authMessage: [action.payload],
      }

    case userTypes.RESET_AUTHENTICATION_MESSAGE:
      return {
        ...state,
        authMessage: null
      }

    case cartTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          cart: state.currentUser?.cart.includes(action.payload.shopItemId)
            ? state.currentUser?.cart
            : state.currentUser?.cart.concat(action.payload.shopItemId)
        }
      } as IUserState

    case cartTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          cart: state.currentUser?.cart.filter(
              (item) => item !== action.payload.shopItemId)
        }
      } as IUserState

    case cartTypes.CLEAR_CART:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          cart: []
        }
      } as IUserState

    default:
      return state
  }
}

export default userReducer
