import * as cartTypes from './CartActionTypes'
import { CartTypes } from './CartActionTypes';
import { IShopItemWithQuantity } from '../../Interfaces/ShopInterfaces';
import { increaseQuantityFromItem,
  decreaseQuantityFromItem } from '../../Utils/CartUtils';

export interface ICartState {
  cartItems: Array<IShopItemWithQuantity> | []
}

const INITIAL_STATE: ICartState = {
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action: CartTypes): ICartState => {
  switch (action.type) {
    case cartTypes.GET_SHOP_ITEMS_FROM_CART_SUCCESS:
      return {
        ...state,
        cartItems: [...action.payload]
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
        cartItems: increaseQuantityFromItem(state.cartItems, action.payload)
      }

    case cartTypes.DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: decreaseQuantityFromItem(state.cartItems, action.payload)
      }

    default:
      return state
  }
}

export default cartReducer
