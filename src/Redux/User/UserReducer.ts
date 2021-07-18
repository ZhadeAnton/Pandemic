import * as userActions from './UserActionTypes'
import * as cartTypes from '../Cart/CartActionTypes'
import { UserTypes } from './UserActionTypes'
import { CartTypes } from '../Cart/CartActionTypes'
import { IUser } from './../../Interfaces/UserInterfaces';
import { addItemToCart, removeItemFromCart } from '../../Utils/UserUtils';

export interface IUserState {
  currentUser: IUser | null,
  isLoading: boolean,
}

type UserReducer = UserTypes | CartTypes

const INITIAL_STATE: IUserState = {
  currentUser: null,
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
        isLoading: false
      }

    case userActions.SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }

    case userActions.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        isLoading: false
      }

    case userActions.AUTHENTICATION_ERROR:
      return {
        ...state,
        isLoading: false
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
