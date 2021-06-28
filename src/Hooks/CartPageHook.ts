import { useEffect } from 'react'

import * as cartActions from '../Redux/Cart/CartActionCreators'
import { useAppDispatch, useAppSelector } from './PreTypedHooks'
import {
  IFnDecreaseQuantity,
  IFnIncreaseQuantity,
  IFnRemoveItem
} from '../Interfaces/ShopInterfaces'
import { totalPriceItemsSelector } from '../Redux/Cart/CartSelectors'

export default function useCartPage() {
  const state = useAppSelector((state) => state)

  const currentUserUid = state.user.currentUser!.uid
  const cartItems = state.cart.cartItems
  const isLoading = state.cart.isLoading

  const dispatch = useAppDispatch()

  const totalPrice = totalPriceItemsSelector(state)

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
