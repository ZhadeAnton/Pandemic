import React, { useState } from 'react'

import './shopListSection.scss'
import { useAppSelector } from '../../../Hooks/PreTypedHooks'
import { getShopItemsByFilter, shopItemsSortFn } from '../../../Utils/sortUtils'

import ShopItemsList from '../../Blocks/ShopItemsList/ShopItemsList'
import CustomPagination from '../../Custom/Pagination/Pagination'
import CustomDropdown from '../../Custom/CustomDropdown/CustomDropdown'

export default function ShopProducts() {
  const [filterBy, setFilterBy] = useState('Default')
  const [sortedBy, setSortedBy] = useState('Default')

  const itemsLength = useAppSelector((state) => state.shop.shopItems.length)
  const allItems = useAppSelector((state) => state.shop.shopItems)

  // Initial values of page's sizing
  const itemsPerPage = useAppSelector((state) => state.shop.itemsPerPage)
  const currentPage = useAppSelector((state) => state.shop.currentPage)

  // Indexes of first and last items
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  // Filtering items by filter-word (useState) or get all items back
  const filteredItems = filterBy !== 'Default'
    ? getShopItemsByFilter[filterBy](allItems) : allItems

  // Slicing filtered items by indexes of first and last items
  const slicedItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem)
  const pagesLength = Math.ceil(filteredItems.length / itemsPerPage)

  // Sorting items which filtered earlier
  const sortedItems = sortedBy !== 'Default'
    ? slicedItems.slice().sort(shopItemsSortFn[sortedBy]) : slicedItems

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
          SHOWING ALL <span>{itemsLength}</span> RESULTS
        </h4>

        <div className='shop-products__filters'>
          <CustomDropdown
            filter
            activeElement={filterBy}
            sortFn={handleFilterItems}
            sortingNames={['Default', 'Sale']}
          />

          <CustomDropdown
            sort
            activeElement={sortedBy}
            sortFn={handleSortItems}
            sortingNames={['Default', 'Price']}
          />
        </div>
      </section>

      <ShopItemsList shopItems={sortedItems}/>

      <div className='shop-products__pagination'>
        <CustomPagination
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          pagesLength={pagesLength}
        />
      </div>
    </div>
  )
}
