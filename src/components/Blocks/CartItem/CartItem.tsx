import React from 'react'

import './cartItem.scss'
import { IShopItem, IShopItemWithQuantity } from '../../../Interfaces/ShopInterfaces'

import Stars from '../../Custom/Stars/Stars'
import CategoriesList from '../CategoriesList/CategoriesList'
import ShopItemPrice from '../ShopItemPrice/ShopItemPrice'

interface Props {
  cartItem: IShopItemWithQuantity,
  onRemoveItem: (
    shopItemId: IShopItem['id'], quantity: IShopItemWithQuantity['quantity']) => void,
    onIncreaseQuantity: any,
    onDecreaseQuantity: any

}

export default function CartItem(props: Props) {
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

          <h3>{props.cartItem.quantity}</h3>
          <i
            style={{color: 'red'}}
            className="bi bi-plus-lg"
            onClick={() => props.onIncreaseQuantity(props.cartItem)}
          />

          <i
            style={{color: 'red'}}
            className="bi bi-dash-lg"
            onClick={() => props.onDecreaseQuantity(props.cartItem)}
          />

        </div>

        <i
          className="bi bi-x cart-item__info--icon"
          onClick={() => props.onRemoveItem(props.cartItem.id, props.cartItem.quantity)}
        />
      </div>
    </li>
  )
}
