import React from 'react'

import './shopItemDetails.scss'
import { useAppDispatch, useAppSelector } from '../../../Hooks/PreTypedHooks'
import { addShopItemToCart } from '../../../Redux/Cart/CartActionCreators'
import { IShopState } from '../../../Redux/Shop/ShopReducer'

import CategoriesList from '../CategoriesList/CategoriesList'
import PlainText from '../PlainText/PlainText'
import Stars from '../../Custom/Stars/Stars'
import ShopButton from '../../Custom/ShopButton/ShopButton'
import ShopItemPrice from '../ShopItemPrice/ShopItemPrice'
import useShopToast from '../../../Hooks/ShopToastHook'
import { IShopItem } from '../../../Interfaces/ShopInterfaces'

interface Props {
  currentItem: IShopState['currentShopItem']
}

export default function ShopItemDetails(props: Props) {
  const currentItem = props.currentItem!
  const dispatch = useAppDispatch()
  const userUid = useAppSelector((state) => state.user.currentUser!.uid)
  const shopItemId = props.currentItem!.id
  const cartItems = useAppSelector((state) => state.cart.cartItems as Array<IShopItem>)

  const isItemExistInTheCart = cartItems.find((item) => item.id === currentItem.id)
  console.log('isExist', isItemExistInTheCart)

  const handleAddItemToCart = () => {
    dispatch(addShopItemToCart({userUid, shopItemId}))
    useShopToast(currentItem.title)
  }

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
        <ShopButton onClick={handleAddItemToCart}/>
      </div>

      <div className='shop-item-details__categories'>
        <CategoriesList categories={currentItem.categories}/>
      </div>
    </div>
  )
}

