import * as userActions from './UserActionTypes'
import * as cartTypes from '../Cart/CartActionTypes'
import { UserTypes } from './UserActionTypes'
import { CartTypes } from '../Cart/CartActionTypes'
import { IUser } from './../../Interfaces/UserInterfaces';
import { addItemToCart, removeItemFromCart } from '../../Utils/UserUtils';

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
    case userActions.GOOGLE_SIGN_IN_START:
    case userActions.FACEBOOK_SIGN_IN_START:
    case userActions.SIGN_IN_WITH_EMAIL:
    case userActions.SIGN_UP_WITH_EMAIL:
      return {
        ...state,
        isLoading: true
      }

    case userActions.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        authMessage: ['You are successfully logged in!'],
        isLoading: false
      }

    case userActions.SIGN_UP_SUCCESS:
      return {
        ...state,
        authMessage: ['You are successfully signed up and logged in!'],
        isLoading: false
      }

    case userActions.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        authMessage: ['You are successfully signed out!'],
        isLoading: false
      }

    case userActions.AUTHENTICATION_MESSAGE:
      return {
        ...state,
        authMessage: [action.payload],
        isLoading: false
      }

    case userActions.RESET_AUTHENTICATION_MESSAGE:
      return {
        ...state,
        authMessage: null
      }

    case cartTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          cart: addItemToCart(state.currentUser!.cart, action.payload.shopItemId)
        }
      } as IUserState

    case cartTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          cart: removeItemFromCart(state.currentUser!.cart, action.payload.shopItemId)
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
