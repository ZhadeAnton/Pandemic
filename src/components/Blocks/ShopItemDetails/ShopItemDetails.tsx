import React from 'react'
import { IShopItem } from '../../../Interfaces/ShopInterfaces'
import CategoriesList from '../CategoriesList/CategoriesList'
import PlainText from '../PlainText/PlainText'


import './shopItemDetails.scss'

interface Props {
  price: IShopItem['price'],
  description: IShopItem['description'],
  categories: IShopItem['categories']
}

export default function ShopItemDetails(props: Props) {
  return (
    <div className='shop-item-details'>
      <h4 className='shop-item-details--price'>
        {props.price}
      </h4>

      <PlainText text={props.description}/>

      <div>Section number 111</div>

      <div className='shop-item-details__categories'>
        <CategoriesList categories={props.categories}/>
      </div>
    </div>
  )
}
