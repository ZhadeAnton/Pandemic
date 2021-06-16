import React, { useState } from 'react'

import './shopListSection.scss'
import * as sortUtils from '../../../Utils/sortUtils'
import { useAppSelector } from '../../../Hooks/PreTypedHooks'
import useShopPaginationHook from '../../../Hooks/ShopPaginationHook'

import ShopItemsList from '../../Blocks/ShopItemsList/ShopItemsList'
import CustomPagination from '../../Custom/Pagination/Pagination'
import CustomDropdown from '../../Custom/CustomDropdown/CustomDropdown'

export default function ShopProducts() {
  const [filterBy, setFilterBy] = useState('Default')
  const [sortedBy, setSortedBy] = useState('Default')

  const allShopItems = useAppSelector((state) => state.shop.shopItems)

  // Filtering items by filter-word (useState) or get all items back
  const filteredItems = sortUtils.filterShopItemsByTag(filterBy, allShopItems)

  const pagination = useShopPaginationHook()
  const paginationData = pagination.handlePagination(filteredItems)

  // Sorting items which filtered earlier
  const sortedItems = sortUtils.sortShopItemsByTag(sortedBy, paginationData.slicedItems)

  const handleFilterItems = (filter: string) => {
    setFilterBy(filter)
  }

  const handleSortItems = (sorting: string) => {
    setSortedBy(sorting)
  }

  return (
    <div className='shop-products'>
      <section className='shop-products__top-row'>
        <h4 className='shop-products__top-row--title'>
          SHOWING ALL <span>{paginationData.slicedItems.length}</span> RESULTS
        </h4>

        <div className='shop-products__filters'>
          <CustomDropdown
            filter
            activeElement={filterBy}
            sortFn={handleFilterItems}
            sortingNames={sortUtils.filterNames}
          />

          <CustomDropdown
            sort
            activeElement={sortedBy}
            sortFn={handleSortItems}
            sortingNames={sortUtils.sortNames}
          />
        </div>
      </section>

      <ShopItemsList shopItems={sortedItems}/>

      <div className='shop-products__pagination'>
        <CustomPagination
          itemsPerPage={paginationData.itemsPerPage}
          currentPage={paginationData.currentPage}
          pagesLength={paginationData.pagesLength}
        />
      </div>
    </div>
  )
}
