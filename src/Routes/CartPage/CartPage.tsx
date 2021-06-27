import React, { useEffect } from 'react'

import './cartPage.scss'
import { IShopItemWithQuantity } from '../../Interfaces/ShopInterfaces'
import { useAppDispatch, useAppSelector } from '../../Hooks/PreTypedHooks'
import { getShopItemsFromCart,
  increaseQuantity,
  decreaseQuantity,
  removeShopItemFromCart } from '../../Redux/Cart/CartActionCreators'

import CartList from '../../Components/Blocks/CartList/CartList'
import Footer from '../../Components/Sections/Footer/Footer'

export default function CartPage() {
  const currentUser = useAppSelector((state) => state.user.currentUser!)
  const cartItems = useAppSelector((state) => state.cart.cartItems)
  const userUid = currentUser!.uid

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getShopItemsFromCart(userUid))
  }, [])

  const handleRemoveItem = (
      shopItemId: IShopItemWithQuantity['id'],
      quantity: IShopItemWithQuantity['quantity']) => {
    dispatch(removeShopItemFromCart({userUid, shopItemId, quantity}))
  }

  const handleIncreaseQuantity = (shopItem: IShopItemWithQuantity) => {
    dispatch(increaseQuantity(shopItem))
  }

  const handleDecreaseQuantity = (shopItem: IShopItemWithQuantity) => {
    dispatch(decreaseQuantity(shopItem))
  }

  return (
    <main className='cart-page'>
      <section className='cart-page__wrapper container'>
        <div className='cart-page__list'>
          <CartList
            cartItems={cartItems}
            onRemoveItem={handleRemoveItem}
            onIncreaseQuantity={handleIncreaseQuantity}
            onDecreaseQuantity={handleDecreaseQuantity}
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
