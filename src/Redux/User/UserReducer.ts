import * as userTypes from './UserActionTypes'
import * as cartTypes from '../Cart/CartActionTypes'
import { UserTypes } from './UserActionTypes'
import { CartTypes } from '../Cart/CartActionTypes'
import { IUser } from './../../Interfaces/UserInterfaces';

export interface IUserState {
  currentUser: IUser | null,
  authenticationError: string | null,
  isSignUp: boolean,
  isSignIn: boolean,
  isLoading: boolean,
}

 type UserReducer = UserTypes | CartTypes

const INITIAL_STATE: IUserState = {
  currentUser: null,
  authenticationError: null,
  isSignUp: false,
  isSignIn: false,
  isLoading: false,
}

const userReducer = (state = INITIAL_STATE, action: UserReducer) => {
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

    default:
      return state
  }
}

export default userReducer
