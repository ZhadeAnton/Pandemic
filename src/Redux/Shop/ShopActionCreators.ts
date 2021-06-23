import * as types from './ShopActionTypes'
import { IShopItem } from '../../Interfaces/ShopInterfaces'
import { IUser } from '../../Interfaces/UserInterfaces'

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

export const getShopItemsFromCart = (
    userUid: IUser['uid']): types.GetShopItemsFromCart => ({
  type: types.GET_SHOP_ITEMS_FROM_USER_CART,
  payload: userUid
})
