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
  handleRemoveItem: IFnRemoveItem,
  handleIncreaseQuantity: IFnIncreaseQuantity,
  handleDecreaseQuantity: IFnDecreaseQuantity
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
              handleRemoveItem={props.handleRemoveItem}
              handleIncreaseQuantity={props.handleIncreaseQuantity}
              handleDecreaseQuantity={props.handleDecreaseQuantity}
            />
          )
        })
      }
    </ul>
  )
}
