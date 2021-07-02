import { useState } from 'react'

import { ArrayOfShopItems } from '../Interfaces/ShopInterfaces'
import { filterShopItemsByTag, sortShopItemsByTag } from '../Utils/SortUtils'
import useShopPaginationHook from './ShopPaginationHook'

export interface IFnFilterShopItems {
  (filter: string): void
}

export default function useShopItemsFiltering(shopItems: ArrayOfShopItems) {
  const [filterBy, setFilterBy] = useState('Default')
  const [sortedBy, setSortedBy] = useState('Default')

  // Filtering items by filter-word (useState) or get all items back
  const filteredItems = filterShopItemsByTag(filterBy, shopItems)

  const pagination = useShopPaginationHook()
  const paginationData = pagination.handlePagination(filteredItems)

  // Sorting items which filtered earlier
  const sortedItems = sortShopItemsByTag(sortedBy, paginationData.slicedItems)

  const handleFilterItems: IFnFilterShopItems = (filter) => {
    setFilterBy(filter)
  }

  const handleSortItems: IFnFilterShopItems = (sorting) => {
    setSortedBy(sorting)
  }

  return {
    filterBy,
    sortedBy,
    sortedItems,
    paginationData,
    handleFilterItems,
    handleSortItems
  }
}
