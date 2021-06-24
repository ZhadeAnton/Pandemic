import * as cartTypes from './CartActionTypes'
import { CartTypes } from './CartActionTypes';
import { IShopItem } from '../../Interfaces/ShopInterfaces';

export interface ICartState {
  cartItems: Array<IShopItem> | []
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
        cartItems: state.cartItems.filter((item) => item.id !== action.payload.shopItemId)
      }

    default:
      return state
  }
}

export default cartReducer
