import {
  ArrayIShopItemWithQuantity,
  IShopItemWithQuantity } from '../../Interfaces/ShopInterfaces'
import { IUser } from '../../Interfaces/UserInterfaces'

export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
export interface AddItemToCart {
  type: typeof ADD_ITEM_TO_CART,
  payload: {
    userUid: IUser['uid'],
    shopItemId: IShopItemWithQuantity['id']
  }
}

export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART'
export interface RemoveItemFromCart {
  type: typeof REMOVE_ITEM_FROM_CART,
  payload: {
    userUid: IUser['uid'],
    shopItemId: IShopItemWithQuantity['id'],
    quantity: IShopItemWithQuantity['quantity']
  }
}

export const GET_SHOP_ITEMS_FROM_USER_CART = 'GET_SHOP_ITEMS_FROM_USER_CART'
export interface GetShopItemsFromCart {
  type: typeof GET_SHOP_ITEMS_FROM_USER_CART,
  payload: IUser['uid']
}

export const GET_SHOP_ITEMS_FROM_CART_SUCCESS = 'GET_SHOP_ITEMS_FROM_CART_SUCCESS'
export interface GetShopItemsFromCartSuccess {
  type: typeof GET_SHOP_ITEMS_FROM_CART_SUCCESS,
  payload: ArrayIShopItemWithQuantity
}

export const INCREASE_QUANTITY = 'INCREASE_QUANTITY'
export interface IncreaseQuantity {
  type: typeof INCREASE_QUANTITY,
  payload: IShopItemWithQuantity
}

export const DECREASE_QUANTITY = 'DECREASE_QUANTITY'
export interface DecreaseQuantity {
  type: typeof DECREASE_QUANTITY,
  payload: IShopItemWithQuantity
}

export type CartTypes =
|AddItemToCart
|RemoveItemFromCart
|GetShopItemsFromCart
|GetShopItemsFromCartSuccess
|IncreaseQuantity
|DecreaseQuantity
