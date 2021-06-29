import * as cartTypes from './CartActionTypes'
import * as ShopInterfaces from '../../Interfaces/ShopInterfaces'
import * as CartInterfaces from '../../Interfaces/CartInterfaces'

export const addShopItemToCart: ShopInterfaces.IFnRemoveShopItem =
  ({userUid, shopItemId}): cartTypes.AddItemToCart => ({
    type: cartTypes.ADD_ITEM_TO_CART,
    payload: {userUid, shopItemId}
  })

export const removeShopItemFromCart: CartInterfaces.IFnRemoveItemFromCart =
  ({userUid, shopItemId, quantity}): cartTypes.RemoveItemFromCart => ({
    type: cartTypes.REMOVE_ITEM_FROM_CART,
    payload: {userUid, shopItemId, quantity}
  })

export const getShopItemsFromCart: CartInterfaces.IFnGetShopItemsFromCart =
  (userUid): cartTypes.GetShopItemsFromCart => ({
    type: cartTypes.GET_SHOP_ITEMS_FROM_USER_CART,
    payload: userUid
  })

export const getShopItemsFromCartSucces: CartInterfaces.IFnGetShopItemsFromCartSucces =
  (shopItems): cartTypes.GetShopItemsFromCartSuccess => ({
    type: cartTypes.GET_SHOP_ITEMS_FROM_CART_SUCCESS,
    payload: shopItems
  })

export const increaseQuantity: CartInterfaces.IFnIncreaseQuantity =
  (shopItem): cartTypes.IncreaseQuantity => ({
    type: cartTypes.INCREASE_QUANTITY,
    payload: shopItem
  })

export const decreaseQuantity: CartInterfaces.IFnDecreaseQuantity =
  (shopItem): cartTypes.DecreaseQuantity => ({
    type: cartTypes.DECREASE_QUANTITY,
    payload: shopItem
  })
