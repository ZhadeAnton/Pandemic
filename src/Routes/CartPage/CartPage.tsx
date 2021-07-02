import React from 'react'

import './cartPage.scss'
import useCartPage from '../../Hooks/CartPageHook'

import CartList from '../../Components/Blocks/CartList/CartList'
import Footer from '../../Components/Sections/Footer/Footer'
import Preloader from '../../Components/Custom/CubePreloader/CubePreloader'
import CartTotalPrice from '../../Components/Blocks/CartTotalPrice/CartTotalPrice'
import ButtonSecondary from '../../Components/Sections/ButtonSecondary/ButtonSecondary'
import CartEmpty from '../../Components/Blocks/CartEmpty/CartEmpty'
import ParallaxHeading from '../../Components/Sections/ParallaxHeading/ParallaxHeading'
import SectionBanner from '../../Components/Sections/SectionBanner/SectionBanner'

export default function CartPage() {
  const cartPageHook = useCartPage()

  if (cartPageHook && cartPageHook.isLoading) {
    return <Preloader />
  } else {
    return (
      <main className='cart-page'>
        <div className='cart-page__wrapper'>
          <SectionBanner sectionName='Cart' />

          {
            cartPageHook && cartPageHook.cartItems.length !== 0
            ?
              <>
                <section className='cart-page__top-row container'>
                  <div className='cart-page__top-row--total-price'>
                    <CartTotalPrice totalPrice={cartPageHook.totalPrice}/>
                  </div>

                  <ButtonSecondary onClick={cartPageHook.handleClearCart}>
                    Clear cart
                  </ButtonSecondary>
                </section>

                <div className='cart-page__list container'>
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
        </div>

        <ParallaxHeading />
        <Footer />
      </main>
    )
  }
}
