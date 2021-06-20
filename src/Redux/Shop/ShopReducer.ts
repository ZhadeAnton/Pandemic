import * as shopActions from './ShopActionTypes'
import * as generalActions from '../General/GeneralActionTypes'
import { IShopItem } from './../../Interfaces/ShopInterfaces';
import { GeneralTypes } from '../General/GeneralActionTypes';

export interface IShopState {
  shopItems: Array<IShopItem> | [],
  currentShopItem: IShopItem | null,
  initialPage: number,
  currentPage: number,
  itemsPerPage: number,
  isLoading: boolean
}

const INITIAL_STATE: IShopState = {
  shopItems: [],
  currentShopItem: null,
  initialPage: 1,
  currentPage: 1,
  itemsPerPage: 8,
  isLoading: false
}

type reduserTypes = shopActions.ShopTypes | GeneralTypes

const shopReducer =
  (state = INITIAL_STATE, action: reduserTypes): IShopState => {
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

      case shopActions.SET_CURRENT_SHOP_ITEM:
        return {
          ...state,
          currentShopItem: action.payload,
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
