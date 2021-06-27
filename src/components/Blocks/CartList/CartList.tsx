import React from 'react'

import './cartList.scss'
import { ICartState } from '../../../Redux/Cart/CartReducer'

import CartItem from '../CartItem/CartItem'

interface Props {
  cartItems: ICartState['cartItems'],
  onRemoveItem: any,
  onIncreaseQuantity: any,
  onDecreaseQuantity: any
}

export default function CartList(props: Props) {
  return (
    <ul className='cart-list'>
      {
        props.cartItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              cartItem={item}
              onRemoveItem={props.onRemoveItem}
              onIncreaseQuantity={props.onIncreaseQuantity}
              onDecreaseQuantity={props.onDecreaseQuantity}
            />
          )
        })
      }
    </ul>
  )
}
