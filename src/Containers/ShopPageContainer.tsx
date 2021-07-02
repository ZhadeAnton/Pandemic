import React, { useEffect } from 'react'

import useShopItemsFiltering, { IFnFilterShopItems } from '../Hooks/FilterHook'
import { useAppDispatch, useAppSelector } from '../Hooks/PreTypedHooks'
import { ArrayOfShopItems } from '../Interfaces/ShopInterfaces'
import { IUser } from '../Interfaces/UserInterfaces'
import { getShopItems } from '../Redux/Shop/ShopActionCreators'
import { IShopState } from '../Redux/Shop/ShopReducer'
import { sortingNames, filteringNames } from '../Utils/SortUtils'

import ShopPage from '../Routes/ShopPage/ShopPage'
import Preloader from '../Components/Custom/CubePreloader/CubePreloader'

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
  paginationData: {
    itemsPerPage: IShopState['itemsPerPage'],
    currentPage: IShopState['currentPage'],
    pagesLength: number
  },
  onFilterItems: IFnFilterShopItems,
  onSortItems: IFnFilterShopItems
}

export default function ShopPageContainer() {
  const allShopItems = useAppSelector((state) => state.shop.shopItems)
  const isLoading = useAppSelector((state) => state.shop.isLoading)
  const userUid = useAppSelector((state) => state.user.currentUser?.uid)

  const dispatch = useAppDispatch()
  const filterHook = useShopItemsFiltering(allShopItems)

  const paginationData = filterHook.paginationData
  const slicedItemsLength = paginationData.slicedItems.length

  useEffect(() => {
    dispatch(getShopItems())
  }, [])

  if (isLoading) return <Preloader />

  return (
    <ShopPage
      shopItems={allShopItems}
      userUid={userUid}
      isLoading={isLoading}
      slicedItemsLength={slicedItemsLength}
      paginationData={paginationData}
      sortedItems={filterHook.sortedItems}
      onFilterItems={filterHook.handleFilterItems}
      onSortItems={filterHook.handleSortItems}
      filterBy={filterHook.filterBy}
      sortedBy={filterHook.sortedBy}
      sortingNames={sortingNames}
      filteringNames={filteringNames}
    />
  )
}

