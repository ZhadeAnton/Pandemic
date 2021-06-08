import * as actions from './ShopActionTypes'
import { IShopItem } from './../../Interfaces/ShopInterfaces';

export interface ShopState {
  shopItems: Array<IShopItem> | [],
  isLoading: boolean
}

const INITIAL_STATE: ShopState = {
  shopItems: [],
  isLoading: false
}

const shopReducer =
  (state = INITIAL_STATE, action: actions.ShopTypes): ShopState => {
    switch (action.type) {
      case actions.GET_SHOP_ITEMS:
        return {
          ...state,
          isLoading: true
        }

      case actions.GET_SHOP_ITEMS_SUCCESS:
        return {
          ...state,
          shopItems: action.payload,
          isLoading: false
        }

      default:
        return state
    }
  }

export default shopReducer
