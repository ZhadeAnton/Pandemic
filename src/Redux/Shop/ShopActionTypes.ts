import { IShopItem } from '../../Interfaces/ShopInterfaces'

export const GET_SHOP_ITEMS = 'GET_SHOP_ITEMS'
export interface GetShopItems {
  type: typeof GET_SHOP_ITEMS
}

export const GET_SHOP_ITEMS_SUCCESS = 'GET_SHOP_ITEMS_SUCCESS'
export interface GetShopItemsSuccess {
  type: typeof GET_SHOP_ITEMS_SUCCESS,
  payload: Array<IShopItem>
}

export type ShopTypes =
|GetShopItems
|GetShopItemsSuccess
