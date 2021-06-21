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
  const dispatch = useAppDispatch()
  const currentUser = useAppSelector((state) => state.user.currentUser)
  const handleAddItemToCart = () => {
    dispatch(addShopItemToCart(currentUser!.uid, props.currentItem!.id))
  }

  return (
    <div className='shop-item-details'>
      <div>
        <Stars starsCount={props.currentItem!.popularity}/>
      </div>

      {
        props.currentItem!.sale
        ?
          <div className='shop-item-details__price-wrapper'>
            <h4 className='shop-item-details__price-wrapper--price-old'>
              {props.currentItem!.price}
            </h4>

            <h4 className='shop-item-details__price-wrapper--price-new'>
              {props.currentItem!.newPrice}
            </h4>
          </div>
        :
          <div className='shop-item-details__price-wrapper'>
            <h4 className='shop-item-details__price-wrapper--price'>
              {props.currentItem!.price}
            </h4>
          </div>
      }

      <PlainText text={props.currentItem!.details}/>

      <ShopButton onClick={handleAddItemToCart}/>

      <div className='shop-item-details__categories'>
        <CategoriesList categories={props.currentItem!.categories}/>
      </div>
    </div>
  )
}

