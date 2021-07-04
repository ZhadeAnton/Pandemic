import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../Hooks/PreTypedHooks'
import { totalPriceItemsSelector } from '../Redux/Cart/CartSelectors'
import * as cartActions from '../Redux/Cart/CartActionCreators'
import { IFnRemoveItem } from '../Interfaces/ShopInterfaces'
import {
  IFnClearCart,
  IFnDecreaseQuantity,
  IFnIncreaseQuantity } from '../Interfaces/CartInterfaces'
import { IUser } from '../Interfaces/UserInterfaces'
import { ICartState } from '../Redux/Cart/CartReducer'

import CartPage from '../Routes/CartPage/CartPage'
import useScrollToTop from '../Hooks/ScrollToTopHook'

export interface ICartContainer {
  userUid: IUser['uid'],
  cartItems: ICartState['cartItems'],
  isLoading: ICartState['isLoading'],
  totalPrice: number
  handleClearCart: IFnClearCart,
  handleRemoveItem: IFnRemoveItem,
  handleIncreaseQuantity: IFnIncreaseQuantity,
  handleDecreaseQuantity: IFnIncreaseQuantity
}

export default function CartContainer() {
  const userUid = useAppSelector((state) => state.user.currentUser?.uid)
  const cartItems = useAppSelector((state) => state.cart.cartItems)
  const isLoading = useAppSelector((state) => state.cart.isLoading)

  const totalPrice = totalPriceItemsSelector(useAppSelector((state) => state))

  const dispatch = useAppDispatch()

  useScrollToTop()

  useEffect(() => {
    dispatch(cartActions.getShopItemsFromCart(userUid))
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

  const handleClearCart: IFnClearCart = () => {
    dispatch(cartActions.clearCart(userUid))
  }

  return (
    <CartPage
      userUid={userUid}
      cartItems={cartItems}
      isLoading={isLoading}
      totalPrice={totalPrice}
      handleClearCart={handleClearCart}
      handleRemoveItem={handleRemoveItem}
      handleIncreaseQuantity={handleIncreaseQuantity}
      handleDecreaseQuantity={handleDecreaseQuantity}
    />
  )
}
