import React, { useState } from 'react'

import './shopListSection.scss'
import { useAppSelector } from '../../../Hooks/PreTypedHooks'
import { getShopItemsByFilter } from '../../../Utils/sortUtils'

import ShopItemsList from '../../Blocks/ShopItemsList/ShopItemsList'
import FilterDropdown from '../../Custom/Dropdown/Dropdown'
import CustomPagination from '../../Custom/Pagination/Pagination'

export default function ShopProducts() {
  const [filterBy, setFilterBy] = useState('Default')

  const itemsLength = useAppSelector((state) => state.shop.shopItems.length)
  const allItems = useAppSelector((state) => state.shop.shopItems)

  // Initial values of page's sizing
  const itemsPerPage = useAppSelector((state) => state.shop.itemsPerPage)
  const currentPage = useAppSelector((state) => state.shop.currentPage)

  // Indexes of first and last items
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  // Filtering items by filter-word (useState) or get all items back
  const filteredItems = filterBy !== 'Defaut'
    ? getShopItemsByFilter[filterBy](allItems) : allItems

  // Slicing filtered items by indexes of first and last items
  const slicedItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem)
  const pagesLength = Math.ceil(filteredItems.length / itemsPerPage)

  const handleFilterItems = (filter: string) => {
    setFilterBy(filter)
  }

  return (
    <div className='shop-products'>
      <section className='shop-products__top-row'>
        <h4 className='shop-products__top-row--title'>
          SHOWING ALL <span>{itemsLength}</span> RESULTS
        </h4>

        <div className='shop-products__top-row--dropdown'>
          <FilterDropdown
            flterTitle={filterBy}
            onFilterItems={handleFilterItems}
          />
        </div>
      </section>

      <ShopItemsList shopItems={slicedItems}/>

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
