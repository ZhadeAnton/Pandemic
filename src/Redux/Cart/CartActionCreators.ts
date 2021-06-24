import * as cartTypes from './CartActionTypes'

import { IAddShopItem, IShopItem } from '../../Interfaces/ShopInterfaces'
import { IUser } from '../../Interfaces/UserInterfaces'

export const addShopItemToCart = (
    {userUid, shopItemId}: IAddShopItem): cartTypes.AddItemToCart => ({
  type: cartTypes.ADD_ITEM_TO_CART,
  payload: {userUid, shopItemId}
})

export const removeShopItemFromCart = (
    {userUid, shopItemId}: IAddShopItem): cartTypes.RemoveItemFromCart => ({
  type: cartTypes.REMOVE_ITEM_FROM_CART,
  payload: {userUid, shopItemId}
})

export const getShopItemsFromCart = (
    userUid: IUser['uid']): cartTypes.GetShopItemsFromCart => ({
  type: cartTypes.GET_SHOP_ITEMS_FROM_USER_CART,
  payload: userUid
})

export const getShopItemsFromCartSucces = (
    shopItems: Array<IShopItem>): cartTypes.GetShopItemsFromCartSuccess => ({
  type: cartTypes.GET_SHOP_ITEMS_FROM_CART_SUCCESS,
  payload: shopItems
})
