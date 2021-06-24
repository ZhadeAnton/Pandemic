import React from 'react'

import './cartList.scss'
import { IShopItem } from '../../../Interfaces/ShopInterfaces'

import CartItem from '../CartItem/CartItem'

interface Props {
  cartItems: Array<IShopItem>,
  onRemoveItem: any
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
            />
          )
        })
      }
    </ul>
  )
}
