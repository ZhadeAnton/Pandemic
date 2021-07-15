import React from 'react'

import './cartItemQuantitny.scss'
import { ICartItem,
  IFnDecreaseQuantity,
  IFnIncreaseQuantity } from '../../../Interfaces/CartInterfaces'

interface Props {
  cartItem: ICartItem,
  onIncreaseQuantity: IFnIncreaseQuantity,
  onDecreaseQuantity: IFnDecreaseQuantity
}

export default function CartItemQuantitny(props: Props) {
  return (
    <div className='cart-item-quantity'>
      <i
        role='img'
        data-testid='increase-button'
        className="bi bi-plus-lg cart-item-quantity__icon"
        onClick={() => props.onIncreaseQuantity(props.cartItem)}
      />

      <h5 data-testid='quantity-output' className='cart-item-quantity__number'>
        {props.cartItem.quantity}
      </h5>

      <i
        data-testid='decrease-button'
        className="bi bi-dash-lg cart-item-quantity__icon"
        onClick={() => props.onDecreaseQuantity(props.cartItem)}
      />
    </div>
  )
}
