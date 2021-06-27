import React from 'react'

import './cartItem.scss'

import Stars from '../../Custom/Stars/Stars'
import CategoriesList from '../CategoriesList/CategoriesList'
import ShopItemPrice from '../ShopItemPrice/ShopItemPrice'
import CartItemQuantitny from '../CartItemQuantitny/CartItemQuantitny'
import { IUser } from '../../../Interfaces/UserInterfaces'
import {
  IFnRemoveItem,
  IShopItemWithQuantity,
  IFnIncreaseQuantity,
  IFnDecreaseQuantity
} from '../../../Interfaces/ShopInterfaces'

interface Props {
  userUid: IUser['uid'],
  cartItem: IShopItemWithQuantity,
  handleRemoveItem: IFnRemoveItem,
  handleIncreaseQuantity: IFnIncreaseQuantity,
  handleDecreaseQuantity: IFnDecreaseQuantity
}

export default function CartItem(props: Props) {
  const handleRemoveItem = () => {
    props.handleRemoveItem(props.userUid, props.cartItem.id, props.cartItem.quantity)
  }

  return (
    <li className='cart-item'>
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

        <div className='cart-item__info--bottom-row'>
          <CategoriesList categories={props.cartItem.categories}/>

          <CartItemQuantitny
            cartItem={props.cartItem}
            onIncreaseQuantity={props.handleIncreaseQuantity}
            onDecreaseQuantity={props.handleDecreaseQuantity}
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
