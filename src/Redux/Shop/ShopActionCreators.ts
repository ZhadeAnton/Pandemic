import * as types from './ShopActionTypes'
import { IShopItem } from '../../Interfaces/ShopInterfaces'

export const getShopItems = (): types.GetShopItems => ({
  type: types.GET_SHOP_ITEMS
})

export const getShopItemsSuccess = (
    items: Array<IShopItem>): types.GetShopItemsSuccess => ({
  type: types.GET_SHOP_ITEMS_SUCCESS,
  payload: items
})

export const setCurrentShopItem = (
    shopItem: IShopItem): types.SetCurrentShopItem => ({
  type: types.SET_CURRENT_SHOP_ITEM,
  payload: shopItem
})
