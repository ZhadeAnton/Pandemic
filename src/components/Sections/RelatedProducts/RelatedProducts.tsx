import React from 'react'

import './relatedProducts.scss'
import { IShopItem } from '../../../Interfaces/ShopInterfaces'
import { ShopState } from '../../../Redux/Shop/ShopReducer'
import { getRelatedShopItems } from '../../../Utils/sortUtils'

import ShopItemsList from '../../Blocks/ShopItemsList/ShopItemsList'

interface Props {
  shopItems: ShopState['shopItems'],
  categories: IShopItem['categories']
}

export default function RelatedProducts(props: Props) {
  const relatedItem = getRelatedShopItems(props.shopItems, props.categories)

  return (
    <div className='related-items'>
      <h2 className='related-items__title'>
        related products
      </h2>

      <ShopItemsList shopItems={relatedItem}/>
    </div>
  )
}
