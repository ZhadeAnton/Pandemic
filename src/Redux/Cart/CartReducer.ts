import * as cartTypes from './CartActionTypes'
import { CartTypes } from './CartActionTypes';
import { ArrayICartItems } from '../../Interfaces/CartInterfaces';
import { increaseItemQuantity,
  decreaseItemQuantity } from '../../Utils/CartUtils';

export interface ICartState {
  cartItems: ArrayICartItems,
  isLoading: boolean
}

const INITIAL_STATE: ICartState = {
  cartItems: [],
  isLoading: false
}

const cartReducer = (state = INITIAL_STATE, action: CartTypes): ICartState => {
  switch (action.type) {
    case cartTypes.GET_SHOP_ITEMS_FROM_USER_CART:
      return {
        ...state,
        isLoading: true
      }

    case cartTypes.GET_SHOP_ITEMS_FROM_CART_SUCCESS:
      return {
        ...state,
        cartItems: [...action.payload],
        isLoading: false
      }

    case cartTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
            (item) => item.id !== action.payload.shopItemId)
      }

    case cartTypes.INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: increaseItemQuantity(state.cartItems, action.payload)
      }

    case cartTypes.DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: decreaseItemQuantity(state.cartItems, action.payload)
      }

    default:
      return state
  }
}

export default cartReducer
