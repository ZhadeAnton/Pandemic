import React from 'react'

import './shopItemDetails.scss'
import { IShopState } from '../../../Redux/Shop/ShopReducer'
import { IHandleAddCartButton } from '../../../Interfaces/CartInterfaces'

import CategoriesList from '../CategoriesList/CategoriesList'
import PlainText from '../PlainText/PlainText'
import Stars from '../../Custom/Stars/Stars'
import ShopButton from '../../Custom/ShopButton/ShopButton'
import ShopItemPrice from '../ShopItemPrice/ShopItemPrice'

interface Props {
  currentItem: IShopState['currentShopItem'],
  handleAddItemToCart: IHandleAddCartButton
}

export default function ShopItemDetails(props: Props) {
  const currentItem = props.currentItem!
  const shopItemId = props.currentItem!.id
  const itemName = currentItem.title

  return (
    <div className='shop-item-details'>
      <div className='shop-item-details__stars'>
        <Stars starsCount={currentItem.popularity}/>
      </div>

      <div className='shop-item-details__price'>
        <ShopItemPrice
          sale={props.currentItem!.sale}
          oldPrice={props.currentItem!.price}
          newPrice={props.currentItem!.newPrice}
        />
      </div>

      <div className='shop-item-details__text'>
        <PlainText text={currentItem.details}/>
      </div>

      <div className='shop-item-details__button'>
        <ShopButton onClick={() => props.handleAddItemToCart(shopItemId, itemName)}/>
      </div>

      <div className='shop-item-details__categories'>
        <CategoriesList categories={currentItem.categories}/>
      </div>
    </div>
  )
}

