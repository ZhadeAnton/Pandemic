import { IShopItem } from '../../Interfaces/ShopInterfaces'
import { IUser } from '../../Interfaces/UserInterfaces'

export const GET_SHOP_ITEMS = 'GET_SHOP_ITEMS'
export interface GetShopItems {
  type: typeof GET_SHOP_ITEMS
}

export const GET_SHOP_ITEMS_SUCCESS = 'GET_SHOP_ITEMS_SUCCESS'
export interface GetShopItemsSuccess {
  type: typeof GET_SHOP_ITEMS_SUCCESS,
  payload: Array<IShopItem>
}

export const SET_CURRENT_SHOP_ITEM = 'SET_CURRENT_SHOP_ITEM'
export interface SetCurrentShopItem {
  type: typeof SET_CURRENT_SHOP_ITEM,
  payload: IShopItem
}

export const GET_SHOP_ITEMS_FROM_USER_CART = 'GET_SHOP_ITEMS_FROM_USER_CART'
export interface GetShopItemsFromCart {
  type: typeof GET_SHOP_ITEMS_FROM_USER_CART,
  payload: IUser['uid']
}

export type ShopTypes =
|GetShopItems
|GetShopItemsSuccess
|SetCurrentShopItem
|GetShopItemsFromCart
