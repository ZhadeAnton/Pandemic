import React from 'react'

import './shopListSection.scss'
import { useAppSelector } from '../../../Hooks/PreTypedHooks'

import ShopItemsList from '../../Blocks/ShopItemsList/ShopItemsList'
import CustomDropdow from '../../Custom/Dropdown/Dropdown'
import CustomPagination from '../../Custom/Pagination/Pagination'

export default function ShopProducts() {
  const itemsPerPage = useAppSelector((state) => state.shop.itemsPerPage)
  const currentPage = useAppSelector((state) => state.shop.currentPage)
  const itemsLength = useAppSelector((state) => state.shop.shopItems.length)
  const indexOfLastMatch = currentPage * itemsPerPage
  const indexOfFirstMatch = indexOfLastMatch - itemsPerPage
  const currentItems = useAppSelector((state) => state.shop.shopItems
      .slice(indexOfFirstMatch, indexOfLastMatch))
  const pagesLength = Math.ceil(itemsLength / itemsPerPage)
  const currentItemsLength = currentItems.length

  return (
    <div className='shop-products'>
      <section className='shop-products__top-row'>
        <h4 className='shop-products__top-row--title'>
          SHOWING ALL <span>{currentItemsLength}</span> RESULTS
        </h4>

        <div className='shop-products__top-row--dropdown'>
          <CustomDropdow />
        </div>
      </section>

      <ShopItemsList shopItems={currentItems}/>

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
