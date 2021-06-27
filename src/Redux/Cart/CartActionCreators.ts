import * as cartTypes from './CartActionTypes'

import * as ShopInterfaces from '../../Interfaces/ShopInterfaces'
import { IUser } from '../../Interfaces/UserInterfaces'

export const addShopItemToCart = (
    {userUid, shopItemId}: ShopInterfaces.IAddShopItem): cartTypes.AddItemToCart => ({
  type: cartTypes.ADD_ITEM_TO_CART,
  payload: {userUid, shopItemId}
})

export const removeShopItemFromCart = (
    {userUid, shopItemId, quantity}: ShopInterfaces.IRemoveShopItem)
    : cartTypes.RemoveItemFromCart => ({
  type: cartTypes.REMOVE_ITEM_FROM_CART,
  payload: {userUid, shopItemId, quantity}
})

export const getShopItemsFromCart = (
    userUid: IUser['uid']): cartTypes.GetShopItemsFromCart => ({
  type: cartTypes.GET_SHOP_ITEMS_FROM_USER_CART,
  payload: userUid
})

export const getShopItemsFromCartSucces = (
    shopItems: Array<ShopInterfaces.IShopItemWithQuantity>)
    : cartTypes.GetShopItemsFromCartSuccess => ({
  type: cartTypes.GET_SHOP_ITEMS_FROM_CART_SUCCESS,
  payload: shopItems
})

export const increaseQuantity = (shopItem: ShopInterfaces.IShopItemWithQuantity)
  : cartTypes.IncreaseQuantity => ({
  type: cartTypes.INCREASE_QUANTITY,
  payload: shopItem
})

export const decreaseQuantity = (shopItem: ShopInterfaces.IShopItemWithQuantity)
  : cartTypes.DecreaseQuantity => ({
  type: cartTypes.DECREASE_QUANTITY,
  payload: shopItem
})
