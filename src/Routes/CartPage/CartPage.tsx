import React from 'react'

import './cartPage.scss'
import useCartPage from '../../Hooks/CartPageHook'

import CartList from '../../Components/Blocks/CartList/CartList'
import Footer from '../../Components/Sections/Footer/Footer'
import Preloader from '../../Components/Custom/CubePreloader/CubePreloader'
import CartTotalPrice from '../../Components/Blocks/CartTotalPrice/CartTotalPrice'
import Heading from '../../Components/Blocks/Heading/Heading'

export default function CartPage() {
  const cartPageHook = useCartPage()

  if (cartPageHook.isLoading) {
    return <Preloader />
  } else {
    return (
      <main className='cart-page'>
        <section className='cart-page__wrapper container'>
          <div className='cart-page__heading'>
            <Heading title='cart'/>
          </div>

          <div className='cart-page__total-price'>
            <CartTotalPrice totalPrice={cartPageHook.totalPrice}/>
          </div>

          <div className='cart-page__list'>
            <CartList
              userUid={cartPageHook.currentUserUid}
              cartItems={cartPageHook.cartItems}
              onRemoveCartItem={cartPageHook.handleRemoveItem}
              onIncreaseQuantity={cartPageHook.handleIncreaseQuantity}
              onDecreaseQuantity={cartPageHook.handleDecreaseQuantity}
            />
          </div>
        </section>

        <Footer />
      </main>
    )
  }
}
