import React from 'react'

import './shopItemDetails.scss'
import { IHandleAddCartButton } from '../../../Interfaces/CartInterfaces'

import CategoriesList from '../CategoriesList/CategoriesList'
import PlainText from '../PlainText/PlainText'
import Stars from '../../Custom/Stars/Stars'
import ShopButton from '../../Custom/ShopButton/ShopButton'
import ShopItemPrice from '../ShopItemPrice/ShopItemPrice'
import { IShopItem } from '../../../Interfaces/ShopInterfaces'

interface Props {
  currentItem: IShopItem,
  handleAddItemToCart: IHandleAddCartButton
}

export default function ShopItemDetails(props: Props) {
  const shopItemId = props.currentItem.id
  const itemName = props.currentItem.title

  return (
    <div className='shop-item-details'>
      <div className='shop-item-details__stars'>
        <Stars starsCount={props.currentItem.popularity}/>
      </div>

      <div className='shop-item-details__price'>
        <ShopItemPrice
          sale={props.currentItem.sale}
          oldPrice={props.currentItem.price}
          newPrice={props.currentItem.newPrice}
        />
      </div>

      <div className='shop-item-details__text'>
        <PlainText text={props.currentItem.details}/>
      </div>

      <div className='shop-item-details__button'>
        <ShopButton onClick={() => props.handleAddItemToCart(shopItemId, itemName)}/>
      </div>

      <div className='shop-item-details__categories'>
        <CategoriesList categories={props.currentItem.categories}/>
      </div>
    </div>
  )
}

