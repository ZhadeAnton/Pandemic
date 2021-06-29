import { useEffect } from 'react'

import * as cartActions from '../Redux/Cart/CartActionCreators'
import { useAppDispatch, useAppSelector } from './PreTypedHooks'
import { IFnRemoveItem } from '../Interfaces/ShopInterfaces'
import {
  IFnDecreaseQuantity,
  IFnIncreaseQuantity } from '../Interfaces/CartInterfaces'
import { totalPriceItemsSelector } from '../Redux/Cart/CartSelectors'

export default function useCartPage() {
  const state = useAppSelector((state) => state)

  const currentUserUid = state.user.currentUser!.uid
  const cartItems = state.cart.cartItems
  const isLoading = state.cart.isLoading
  const totalPrice = totalPriceItemsSelector(state)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(cartActions.getShopItemsFromCart(currentUserUid))
  }, [])

  const handleRemoveItem: IFnRemoveItem = (userUid, shopItemId, quantity) => {
    dispatch(cartActions.removeShopItemFromCart({userUid, shopItemId, quantity}))
  }

  const handleIncreaseQuantity: IFnIncreaseQuantity = (shopItem) => {
    dispatch(cartActions.increaseQuantity(shopItem))
  }

  const handleDecreaseQuantity: IFnDecreaseQuantity = (shopItem) => {
    dispatch(cartActions.decreaseQuantity(shopItem))
  }


  return {
    currentUserUid,
    cartItems,
    isLoading,
    totalPrice,
    handleRemoveItem,
    handleIncreaseQuantity,
    handleDecreaseQuantity
  }
}
