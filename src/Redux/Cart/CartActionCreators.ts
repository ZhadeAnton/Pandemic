import * as cartTypes from './CartActionTypes'
import * as ShopInterfaces from '../../Interfaces/ShopInterfaces'

export const addShopItemToCart: ShopInterfaces.IFnRemoveShopItem =
  ({userUid, shopItemId}): cartTypes.AddItemToCart => ({
    type: cartTypes.ADD_ITEM_TO_CART,
    payload: {userUid, shopItemId}
  })

export const removeShopItemFromCart: ShopInterfaces.IFnRemoveItemFromCart =
  ({userUid, shopItemId, quantity}): cartTypes.RemoveItemFromCart => ({
    type: cartTypes.REMOVE_ITEM_FROM_CART,
    payload: {userUid, shopItemId, quantity}
  })

export const getShopItemsFromCart: ShopInterfaces.IFnGetShopItemsFromCart =
  (userUid): cartTypes.GetShopItemsFromCart => ({
    type: cartTypes.GET_SHOP_ITEMS_FROM_USER_CART,
    payload: userUid
  })

export const getShopItemsFromCartSucces: ShopInterfaces.IFnGetShopItemsFromCartSucces =
  (shopItems): cartTypes.GetShopItemsFromCartSuccess => ({
    type: cartTypes.GET_SHOP_ITEMS_FROM_CART_SUCCESS,
    payload: shopItems
  })

export const increaseQuantity: ShopInterfaces.IFnIncreaseQuantity =
  (shopItem): cartTypes.IncreaseQuantity => ({
    type: cartTypes.INCREASE_QUANTITY,
    payload: shopItem
  })

export const decreaseQuantity: ShopInterfaces.IFnDecreaseQuantity =
  (shopItem): cartTypes.DecreaseQuantity => ({
    type: cartTypes.DECREASE_QUANTITY,
    payload: shopItem
  })
