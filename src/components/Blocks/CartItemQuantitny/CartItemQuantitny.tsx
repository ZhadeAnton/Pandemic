import React from 'react'

import './cartItemQuantitny.scss'
import { IShopItemWithQuantity } from '../../../Interfaces/ShopInterfaces'

interface Props {
  cartItem: IShopItemWithQuantity,
  onIncreaseQuantity: any,
  onDecreaseQuantity: any
}

export default function CartItemQuantitny(props: Props) {
  return (
    <div className='cart-item-quantity'>
      <i
        className="bi bi-plus-lg cart-item-quantity__icon"
        onClick={() => props.onIncreaseQuantity(props.cartItem)}
      />

      <h5 className='cart-item-quantity__number'>
        {props.cartItem.quantity}
      </h5>

      <i
        className="bi bi-dash-lg cart-item-quantity__icon"
        onClick={() => props.onDecreaseQuantity(props.cartItem)}
      />
    </div>
  )
}
