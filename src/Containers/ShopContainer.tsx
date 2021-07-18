import React, { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHook'
import { ArrayOfShopItems } from '../Interfaces/ShopInterfaces'
import { IUser } from '../Interfaces/UserInterfaces'
import { getShopItems } from '../Redux/Shop/ShopActionCreators'
import { IShopState } from '../Redux/Shop/ShopReducer'
import {
  sortingNames,
  filteringNames,
  sortShopItemsByTag,
  filterShopItemsByTag, } from '../Utils/sortUtils'

import ShopPage from '../Routes/ShopPage/ShopPage'
import Preloader from '../Components/Custom/Preloader/Preloader'
import { IHandleAddCartButton } from '../Interfaces/CartInterfaces'
import { addShopItemToCart } from '../Redux/Cart/CartActionCreators'
import useHistoryPush from '../Hooks/useHistory'
import useSliceItems from '../Hooks/useSliceItems'
import useNotification from '../Hooks/useNotification'

export type IShopPageContainer = {
  userUid: IUser['uid']
  shopItems: ArrayOfShopItems,
  sortedItems: ArrayOfShopItems,
  isLoading: IShopState['isLoading'],
  filterBy: string,
  sortedBy: string,
  sortingNames: Array<string>,
  filteringNames: Array<string>,
  slicedItemsLength: number,
  itemsPerPage: IShopState['itemsPerPage'],
  currentPage: IShopState['currentPage'],
  pagesLength: number,
  onFilterItems: IFnFilterShopItems,
  onSortItems: IFnFilterShopItems,
  handleAddItemToCart: IHandleAddCartButton
}

interface IFnFilterShopItems {
  (filter: string): void
}

export default function ShopContainer() {
  const userUid = useAppSelector((state) => state.user.currentUser?.uid)
  const shopItems = useAppSelector((state) => state.shop.shopItems)
  const isLoading = useAppSelector((state) => state.shop.isLoading)
  const itemsPerPage = useAppSelector((state) => state.shop.itemsPerPage)
  const currentPage = useAppSelector((state) => state.shop.currentPage)

  const dispatch = useAppDispatch()
  const redirectToLogin = useHistoryPush()
  const notification = useNotification()

  const [filterBy, setFilterBy] = useState('Default')
  const [sortedBy, setSortedBy] = useState('Default')

  useEffect(() => {
    dispatch(getShopItems())
  }, [])

  // Filtering items by filter-word (useState) or get all items back
  const filteredItems = filterShopItemsByTag(filterBy, shopItems)

  const slisedItemsHook = useSliceItems({
    itemsForSlide: filteredItems, currentPage, itemsPerPage})

  // Sorting items which filtered earlier
  const sortedItems = sortShopItemsByTag(sortedBy, slisedItemsHook.slicedItems)

  const slicedItemsLength = slisedItemsHook.slicedItems.length

  const handleFilterItems: IFnFilterShopItems = (filter) => {
    setFilterBy(filter)
  }

  const handleSortItems: IFnFilterShopItems = (sorting) => {
    setSortedBy(sorting)
  }

  const handleAddItemToCart: IHandleAddCartButton = (shopItemId, itemName) => {
    if (userUid === undefined) {
      redirectToLogin('/login')
      return
    }

    dispatch(addShopItemToCart({userUid, shopItemId}))
    notification.handleAddNotification('SUCCESS',
        `You are successfuly added ${itemName} to the cart!`)
  }

  if (isLoading) return <Preloader preloader='cube'/>

  return (
    <ShopPage
      shopItems={shopItems}
      userUid={userUid}
      isLoading={isLoading}
      slicedItemsLength={slicedItemsLength}
      sortedItems={sortedItems}
      onFilterItems={handleFilterItems}
      onSortItems={handleSortItems}
      filterBy={filterBy}
      sortedBy={sortedBy}
      sortingNames={sortingNames}
      filteringNames={filteringNames}
      pagesLength={slisedItemsHook.pagesLength}
      currentPage={currentPage}
      itemsPerPage={itemsPerPage}
      handleAddItemToCart={handleAddItemToCart}
    />
  )
}

