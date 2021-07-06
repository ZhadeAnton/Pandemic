import React from 'react'

import './cartPage.scss'
import { ICartContainer } from '../../Containers/CartContainer'

import CartList from '../../Components/Blocks/CartList/CartList'
import Footer from '../../Components/Sections/Footer/Footer'
import CartTotalPrice from '../../Components/Blocks/CartTotalPrice/CartTotalPrice'
import ButtonSecondary from '../../Components/Custom/ButtonSecondary/ButtonSecondary'
import CartEmpty from '../../Components/Blocks/CartEmpty/CartEmpty'
import ParallaxHeading from '../../Components/Sections/ParallaxHeading/ParallaxHeading'
import SectionBanner from '../../Components/Sections/SectionBanner/SectionBanner'

export default function CartPage(props: ICartContainer) {
  return (
    <main className='cart-page'>
      <div className='cart-page__wrapper'>
        <SectionBanner sectionName='Cart' />

        {
          props.cartItems.length !== 0
          ?
            <>
              <section className='cart-page__top-row container'>
                <div className='cart-page__top-row--total-price'>
                  <CartTotalPrice totalPrice={props.totalPrice}/>
                </div>

                <ButtonSecondary onClick={props.handleClearCart}>
                  Clear cart
                </ButtonSecondary>
              </section>

              <div className='cart-page__list container'>
                <CartList
                  userUid={props.userUid}
                  cartItems={props.cartItems}
                  onRemoveCartItem={props.handleRemoveItem}
                  onIncreaseQuantity={props.handleIncreaseQuantity}
                  onDecreaseQuantity={props.handleDecreaseQuantity}
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
