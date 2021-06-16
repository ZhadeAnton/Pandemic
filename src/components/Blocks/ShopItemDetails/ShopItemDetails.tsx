import React from 'react'

import './shopItemDetails.scss'
import { IShopItem } from '../../../Interfaces/ShopInterfaces'

import CategoriesList from '../CategoriesList/CategoriesList'
import PlainText from '../PlainText/PlainText'
import Stars from '../../Custom/Stars/Stars'
import ShopButton from '../../Custom/ShopButton/ShopButton'

interface Props {
  price: IShopItem['price'],
  description: IShopItem['description'],
  details: IShopItem['details'],
  categories: IShopItem['categories'],
  popularity: IShopItem['popularity'],
  sale: IShopItem['sale'],
  newPrice: IShopItem['newPrice']
}

export default function ShopItemDetails(props: Props) {
  return (
    <div className='shop-item-details'>
      <div>
        <Stars starsCount={props.popularity}/>
      </div>

      {
        props.sale
        ?
          <div className='shop-item-details__price-wrapper'>
            <h4 className='shop-item-details__price-wrapper--price-old'>
              {props.price}
            </h4>

            <h4 className='shop-item-details__price-wrapper--price-new'>
              {props.newPrice}
            </h4>
          </div>
        :
          <div className='shop-item-details__price-wrapper'>
            <h4 className='shop-item-details__price-wrapper--price'>
              {props.price}
            </h4>
          </div>
      }

      <PlainText text={props.details}/>

      <ShopButton />

      <div className='shop-item-details__categories'>
        <CategoriesList categories={props.categories}/>
      </div>
    </div>
  )
}

