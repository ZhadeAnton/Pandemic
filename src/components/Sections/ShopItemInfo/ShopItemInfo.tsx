import React from 'react'

import './shopItemInfo.scss'
import { IShopState } from '../../../Redux/Shop/ShopReducer'

import Breadcrumbs from '../../Blocks/Breadcrumbs/Breadcrumbs'
import Heading from '../../Blocks/Heading/Heading'
import ShopItemDetails from '../../Blocks/ShopItemDetails/ShopItemDetails'
import Zoom from '../../Custom/Zoom/Zoom'

interface Props {
  currentItem: IShopState['currentShopItem']
}

export default function ShopItemInfo(props: Props) {
  const shopItemName = props.currentItem!.title

  return (
    <section className='shop-item-info container'>
      <div className='shop-item-info__title'>
        <Heading title={props.currentItem!.title}/>
      </div>

      <div className='shop-item-info__breadcrumbs'>
        <Breadcrumbs crumbs={['Home', 'Shop', `${shopItemName}`]}/>
      </div>

      <div className='shop-item-info__product'>
        <div className='shop-item-info__product--image-wrapper'>
          <Zoom
            image={props.currentItem!.imageFull}
            sale={props.currentItem!.sale}
          />
        </div>

        <div className='shop-item-info__product--description'>
          <ShopItemDetails
            currentItem={props.currentItem}
          />
        </div>
      </div>
    </section>
  )
}
