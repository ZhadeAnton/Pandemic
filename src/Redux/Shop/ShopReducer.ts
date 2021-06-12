import * as shopActions from './ShopActionTypes'
import * as generalActions from '../General/GeneralActionTypes'
import { IShopItem } from './../../Interfaces/ShopInterfaces';
import { GeneralTypes } from '../General/GeneralActionTypes';

export interface ShopState {
  shopItems: Array<IShopItem> | [],
  initialPage: number,
  currentPage: number,
  itemsPerPage: number,
  isLoading: boolean
}

const INITIAL_STATE: ShopState = {
  shopItems: [],
  initialPage: 1,
  currentPage: 1,
  itemsPerPage: 8,
  isLoading: false
}

type reduserTypes = shopActions.ShopTypes | GeneralTypes

const shopReducer =
  (state = INITIAL_STATE, action: reduserTypes): ShopState => {
    switch (action.type) {
      case shopActions.GET_SHOP_ITEMS:
        return {
          ...state,
          isLoading: true
        }

      case shopActions.GET_SHOP_ITEMS_SUCCESS:
        return {
          ...state,
          shopItems: action.payload,
          isLoading: false
        }

      case generalActions.SET_PAGE_NUMBER:
        return {
          ...state,
          currentPage: action.payload,
        }

      case generalActions.SET_NEXT_PAGE:
        return {
          ...state,
          currentPage: state.currentPage + 1,
        }

      case generalActions.SET_PREV_PAGE:
        return {
          ...state,
          currentPage: state.currentPage - 1,
        }

      case generalActions.SET_FIRST_PAGE:
        return {
          ...state,
          currentPage: 1,
        }

      case generalActions.SET_LAST_PAGE:
        return {
          ...state,
          currentPage: action.payload,
        }

      default:
        return state
    }
  }

export default shopReducer
