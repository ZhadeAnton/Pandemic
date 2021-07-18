import React from 'react'

import './shopItemPrice.scss'
import { IShopItem } from '../../../Interfaces/ShopInterfaces'

interface Props {
  sale?: IShopItem['sale']
  newPrice?: IShopItem['newPrice']
  oldPrice: IShopItem['price'],
}

export default function ShopItemPrice(props: Props) {
  return (
    <>
      {
        props.sale
        ?
          <div className='shop-item-price'>
            <h4
              data-testid='shop-item-price-old'
              className='shop-item-price__old'
            >
              {props.oldPrice}
            </h4>

            <h4
              data-testid='shop-item-price-new'
              className='shop-item-price__new'>
              {props.newPrice}
            </h4>
          </div>
        :
          <div className='shop-item-price'>
            <h4 className='shop-item-price__default'>
              {props.oldPrice}
            </h4>
          </div>
      }
    </>
  )
}
