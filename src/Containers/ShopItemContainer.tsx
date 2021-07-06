import React from 'react'
import useHistoryPush from '../Hooks/HistoryHook';

import { useAppDispatch, useAppSelector } from '../Hooks/PreTypedHook';
import useScrollToTop from '../Hooks/ScrollToTopHook';
import useShopToast from '../Hooks/ShopToastHook';
import { IHandleAddCartButton } from '../Interfaces/CartInterfaces';
import { ArrayOfShopItems } from '../Interfaces/ShopInterfaces';
import { IUser } from '../Interfaces/UserInterfaces';
import { addShopItemToCart } from '../Redux/Cart/CartActionCreators';
import { IShopState } from '../Redux/Shop/ShopReducer';

import ShopItemPage from '../Routes/ShopItemPage/ShopItemPage';

export interface IShopItemPageContainer {
  currentItem: IShopState['currentShopItem'],
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
  const currentItem = useAppSelector((state) => state.shop.currentShopItem)
  const shopItems = useAppSelector((state) => state.shop.shopItems)
  const itemsPerPage = useAppSelector((state) => state.shop.itemsPerPage)
  const currentPage = useAppSelector((state) => state.shop.currentPage)

  // Indexes of first and last items
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  // Pagination's buttons
  const pagesLength = Math.ceil(shopItems.length / itemsPerPage)

  // Slicing items by indexes of first and last items
  const slicedItems = shopItems.length > itemsPerPage
  ? shopItems.slice(indexOfFirstItem, indexOfLastItem)
  : shopItems

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
    useShopToast(itemName)
  }

  return (
    <ShopItemPage
      currentItem={currentItem}
      shopItems={shopItems}
      userUid={userUid}
      currentPage={currentPage}
      itemsPerPage={itemsPerPage}
      pagesLength={pagesLength}
      slicedItems={slicedItems}
      handleAddItemToCart={handleAddItemToCart}
    />
  )
}
