import React from 'react'

import './cartItem.scss'

import Stars from '../../Custom/Stars/Stars'
import CategoriesList from '../CategoriesList/CategoriesList'
import ShopItemPrice from '../ShopItemPrice/ShopItemPrice'
import CartItemQuantitny from '../CartItemQuantitny/CartItemQuantitny'
import { IUser } from '../../../Interfaces/UserInterfaces'
import {
  ICartItem,
  IFnIncreaseQuantity,
  IFnDecreaseQuantity
} from '../../../Interfaces/CartInterfaces'
import { IFnRemoveItem } from '../../../Interfaces/ShopInterfaces'

interface Props {
  userUid: IUser['uid'],
  cartItem: ICartItem,
  onRemoveCartItem: IFnRemoveItem,
  onIncreaseQuantity: IFnIncreaseQuantity,
  onDecreaseQuantity: IFnDecreaseQuantity
}

export default function CartItem(props: Props) {
  const handleRemoveItem = () => {
    props.onRemoveCartItem(props.userUid, props.cartItem.id, props.cartItem.quantity)
  }

  return (
    <li
      data-testid='cart-item'
      className='cart-item'
    >
      <div className='cart-item__image-wrapper'>
        <img
          className='cart-item__image-wrapper--image'
          src={props.cartItem.imageFull}
          alt={props.cartItem.title}
        />
      </div>

      <div className='cart-item__info'>
        <div className='cart-item__info--top-row'>
          <h4 className='cart-item__info--title'>
            {props.cartItem.title}
          </h4>

          <h4 className='cart-item__info--price'>
            <ShopItemPrice
              sale={props.cartItem.sale}
              oldPrice={props.cartItem.price}
              newPrice={props.cartItem.newPrice}
            />
          </h4>

          <Stars starsCount={props.cartItem.popularity}/>
        </div>

        <div className='cart-item__bottom-row'>
          <div className='cart-item__bottom-row--category-list'>
            <CategoriesList categories={props.cartItem.categories}/>
          </div>

          <CartItemQuantitny
            cartItem={props.cartItem}
            onIncreaseQuantity={props.onIncreaseQuantity}
            onDecreaseQuantity={props.onDecreaseQuantity}
          />

        </div>

        <i
          className="bi bi-x cart-item__info--icon"
          onClick={handleRemoveItem}
        />
      </div>
    </li>
  )
}
