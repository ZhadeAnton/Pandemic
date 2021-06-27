import React, { useEffect } from 'react'

import './cartPage.scss'
import { useAppDispatch, useAppSelector } from '../../Hooks/PreTypedHooks'
import { getShopItemsFromCart } from '../../Redux/Cart/CartActionCreators'
import useCartPage from '../../Hooks/CartPageHook'

import CartList from '../../Components/Blocks/CartList/CartList'
import Footer from '../../Components/Sections/Footer/Footer'
import Preloader from '../../Components/Custom/CubePreloader/CubePreloader'

export default function CartPage() {
  const currentUser = useAppSelector((state) => state.user.currentUser!)
  const cartItems = useAppSelector((state) => state.cart.cartItems)
  const userUid = currentUser!.uid
  const isLoading = useAppSelector((state) => state.cart.isLoading)

  const dispatch = useAppDispatch()
  const cartPagehook = useCartPage()

  useEffect(() => {
    dispatch(getShopItemsFromCart(userUid))
  }, [])

  if (isLoading) {
    return <Preloader />
  } else {
    return (
      <main className='cart-page'>
        <section className='cart-page__wrapper container'>
          <div className='cart-page__list'>
            <CartList
              userUid={userUid}
              cartItems={cartItems}
              handleRemoveItem={cartPagehook.handleRemoveItem}
              handleIncreaseQuantity={cartPagehook.handleIncreaseQuantity}
              handleDecreaseQuantity={cartPagehook.handleDecreaseQuantity}
            />
          </div>
        </section>

        <Footer />
      </main>
    )
  }
}
