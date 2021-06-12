import { IShopItem } from '../../Interfaces/ShopInterfaces'
import * as types from './ShopActionTypes'

export const getShopItems = (): types.GetShopItems => ({
  type: types.GET_SHOP_ITEMS
})

export const getShopItemsSuccess = (
    items: Array<IShopItem>): types.GetShopItemsSuccess => ({
  type: types.GET_SHOP_ITEMS_SUCCESS,
  payload: items
})
