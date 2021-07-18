import React from 'react'
import useHistoryPush from '../Hooks/HistoryHook';

import { useAppDispatch, useAppSelector } from '../Hooks/PreTypedHook';
import { IUser } from '../Interfaces/UserInterfaces';
import { IHandleAddCartButton } from '../Interfaces/CartInterfaces';
import { ArrayOfShopItems, IShopItem } from '../Interfaces/ShopInterfaces';
import { addShopItemToCart } from '../Redux/Cart/CartActionCreators';
import { IShopState } from '../Redux/Shop/ShopReducer';
import useScrollToTop from '../Hooks/ScrollToTopHook';
import useSliceItemsHook from '../Hooks/SliceItemsHook';

import ShopItemPage from '../Routes/ShopItemPage/ShopItemPage';
import { addNotification } from '../Redux/General/GeneralActionCreators';

export interface IShopItemPageContainer {
  currentItem: IShopItem,
  shopItems: IShopState['shopItems'],
  slicedItems: ArrayOfShopItems,
  userUid: IUser['uid'],
  currentPage: number,
  itemsPerPage: number,
  pagesLength: number,
  handleAddItemToCart: IHandleAddCartButton
}

export default function ShopItemContainer() {
  const userUid = useAppSelector((state) => state.user.currentUser?.uid)
  const currentItem = useAppSelector((state) => state.shop.currentShopItem!)
  const shopItems = useAppSelector((state) => state.shop.shopItems)
  const itemsPerPage = useAppSelector((state) => state.shop.itemsPerPage)
  const currentPage = useAppSelector((state) => state.shop.currentPage)

  const slisedItems = useSliceItemsHook({
    itemsForSlide: shopItems, currentPage, itemsPerPage})

  const dispatch = useAppDispatch()
  const redirectToLogin = useHistoryPush()

  // Custom hook witch scrolling to the to of the page with useEffect()
  useScrollToTop()

  const handleAddItemToCart: IHandleAddCartButton = (shopItemId, itemName) => {
    if (userUid === undefined) {
      redirectToLogin('/login')
      return
    }

    dispatch(addShopItemToCart({userUid, shopItemId}))
    dispatch(addNotification(
        'SUCCESS', `You are successfully added ${itemName} to the cart`, shopItemId))
  }

  return (
    <ShopItemPage
      currentItem={currentItem}
      shopItems={shopItems}
      userUid={userUid}
      currentPage={currentPage}
      itemsPerPage={itemsPerPage}
      pagesLength={slisedItems.pagesLength}
      slicedItems={slisedItems.slicedItems}
      handleAddItemToCart={handleAddItemToCart}
    />
  )
}
