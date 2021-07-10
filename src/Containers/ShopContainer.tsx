import React, { useEffect, useState } from 'react'

import { useAppDispatch, useAppSelector } from '../Hooks/PreTypedHook'
import { ArrayOfShopItems } from '../Interfaces/ShopInterfaces'
import { IUser } from '../Interfaces/UserInterfaces'
import { getShopItems } from '../Redux/Shop/ShopActionCreators'
import { IShopState } from '../Redux/Shop/ShopReducer'
import {
  sortingNames,
  filteringNames,
  sortShopItemsByTag,
  filterShopItemsByTag, } from '../Utils/SortUtils'

import ShopPage from '../Routes/ShopPage/ShopPage'
import Preloader from '../Components/Custom/Preloader/Preloader'
import { IHandleAddCartButton } from '../Interfaces/CartInterfaces'
import { addShopItemToCart } from '../Redux/Cart/CartActionCreators'
import useShopToast from '../Hooks/ShopToastHook'
import useHistoryPush from '../Hooks/HistoryHook'
import useSliceItemsHook from '../Hooks/SliceItemsHook'

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

  const [filterBy, setFilterBy] = useState('Default')
  const [sortedBy, setSortedBy] = useState('Default')

  useEffect(() => {
    dispatch(getShopItems())
  }, [])

  // Filtering items by filter-word (useState) or get all items back
  const filteredItems = filterShopItemsByTag(filterBy, shopItems)

  const slisedItemsHook = useSliceItemsHook({
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
    useShopToast(itemName)
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

