import React from 'react'

import './cartList.scss'
import { ICartState } from '../../../Redux/Cart/CartReducer'
import {
  IFnRemoveItem,
  IFnIncreaseQuantity,
  IFnDecreaseQuantity
} from '../../../Interfaces/ShopInterfaces'

import CartItem from '../CartItem/CartItem'
import { IUser } from '../../../Interfaces/UserInterfaces'

interface Props {
  userUid: IUser['uid'],
  cartItems: ICartState['cartItems'],
  onRemoveCartItem: IFnRemoveItem,
  onIncreaseQuantity: IFnIncreaseQuantity,
  onDecreaseQuantity: IFnDecreaseQuantity
}

export default function CartList(props: Props) {
  return (
    <ul className='cart-list'>
      {
        props.cartItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              userUid={props.userUid}
              cartItem={item}
              onRemoveCartItem={props.onRemoveCartItem}
              onIncreaseQuantity={props.onIncreaseQuantity}
              onDecreaseQuantity={props.onDecreaseQuantity}
            />
          )
        })
      }
    </ul>
  )
}
