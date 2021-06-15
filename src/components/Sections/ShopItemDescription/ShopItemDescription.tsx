import React from 'react'

import { IShopItem } from '../../../Interfaces/ShopInterfaces'

import ReviewsTabs
  from '../../Custom/ReviewsTabs/ReviewsTabs'

interface Props {
  itemName: IShopItem['title'],
  description: IShopItem['description'],
  reviews: IShopItem['reviews']
}

export default function ShopItemDescription(props: Props) {
  return (
    <section>
      <ReviewsTabs
        itemName={props.itemName}
        description={props.description}
        reviews={props.reviews}
      />
    </section>
  )
}
