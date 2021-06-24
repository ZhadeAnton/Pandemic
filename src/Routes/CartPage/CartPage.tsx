import React, { useEffect } from 'react'

import './cartPage.scss'
import { IShopItem } from '../../Interfaces/ShopInterfaces'
import { useAppDispatch, useAppSelector } from '../../Hooks/PreTypedHooks'
import { getShopItemsFromCart,
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

  const handleRemoveItem = (shopItemId: IShopItem['id']) => {
    dispatch(removeShopItemFromCart({userUid, shopItemId}))
  }

  return (
    <main className='cart-page'>
      <section className='cart-page__wrapper container'>
        <div className='cart-page__list'>
          <CartList
            cartItems={cartItems}
            onRemoveItem={handleRemoveItem}
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
