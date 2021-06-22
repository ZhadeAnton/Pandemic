import React from 'react'

import './shopItemDetails.scss'
import { IShopState } from '../../../Redux/Shop/ShopReducer'

import CategoriesList from '../CategoriesList/CategoriesList'
import PlainText from '../PlainText/PlainText'
import Stars from '../../Custom/Stars/Stars'
import ShopButton from '../../Custom/ShopButton/ShopButton'
import { useAppDispatch, useAppSelector } from '../../../Hooks/PreTypedHooks'
import { addShopItemToCart } from '../../../Redux/User/UserActionCreators'

interface Props {
  currentItem: IShopState['currentShopItem']
}

export default function ShopItemDetails(props: Props) {
  const currentItem = props.currentItem!
  const dispatch = useAppDispatch()
  const userUid = useAppSelector((state) => state.user.currentUser!.uid)
  const shopItemId = props.currentItem!.id

  const handleAddItemToCart = () => {
    dispatch(addShopItemToCart({userUid, shopItemId}))
  }

  return (
    <div className='shop-item-details'>
      <div>
        <Stars starsCount={currentItem.popularity}/>
      </div>

      {
        currentItem.sale
        ?
          <div className='shop-item-details__price-wrapper'>
            <h4 className='shop-item-details__price-wrapper--price-old'>
              {currentItem.price}
            </h4>

            <h4 className='shop-item-details__price-wrapper--price-new'>
              {currentItem.newPrice}
            </h4>
          </div>
        :
          <div className='shop-item-details__price-wrapper'>
            <h4 className='shop-item-details__price-wrapper--price'>
              {currentItem.price}
            </h4>
          </div>
      }

      <PlainText text={currentItem.details}/>

      <ShopButton onClick={handleAddItemToCart}/>

      <div className='shop-item-details__categories'>
        <CategoriesList categories={currentItem.categories}/>
      </div>
    </div>
  )
}

