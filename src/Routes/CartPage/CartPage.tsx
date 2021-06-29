import React from 'react'

import './cartPage.scss'
import useCartPage from '../../Hooks/CartPageHook'

import CartList from '../../Components/Blocks/CartList/CartList'
import Footer from '../../Components/Sections/Footer/Footer'
import Preloader from '../../Components/Custom/CubePreloader/CubePreloader'
import CartTotalPrice from '../../Components/Blocks/CartTotalPrice/CartTotalPrice'
import Heading from '../../Components/Blocks/Heading/Heading'
import ButtonSecondary from '../../Components/Sections/ButtonSecondary/ButtonSecondary'
import Devider from '../../Components/Custom/Devider/Devider'
import CartEmpty from '../../Components/Blocks/CartEmpty/CartEmpty'
import ParallaxHeading from '../../Components/Sections/ParallaxHeading/ParallaxHeading'

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

          {
            cartPageHook.cartItems.length !== 0
            ?
              <>
                <section className='cart-page__top-row'>
                  <div className='cart-page__top-row--total-price'>
                    <CartTotalPrice totalPrice={cartPageHook.totalPrice}/>
                  </div>

                  <ButtonSecondary onClick={cartPageHook.handleClearCart}>
                    Clear cart
                  </ButtonSecondary>
                </section>

                <Devider />

                <div className='cart-page__list'>
                  <CartList
                    userUid={cartPageHook.currentUserUid}
                    cartItems={cartPageHook.cartItems}
                    onRemoveCartItem={cartPageHook.handleRemoveItem}
                    onIncreaseQuantity={cartPageHook.handleIncreaseQuantity}
                    onDecreaseQuantity={cartPageHook.handleDecreaseQuantity}
                  />
                </div>
              </>
            :
              <div className='cart-page__empty'>
                <CartEmpty />
              </div>
          }
        </section>

        <ParallaxHeading />
        <Footer />
      </main>
    )
  }
}
