import React from 'react'

import './relatedProducts.scss'
import { IShopItem } from '../../../Interfaces/ShopInterfaces'
import { IShopState } from '../../../Redux/Shop/ShopReducer'
import { getRelatedShopItems } from '../../../Utils/sortUtils'
import useShopPaginationHook from '../../../Hooks/ShopPaginationHook'

import ShopItemsList from '../../Blocks/ShopItemsList/ShopItemsList'
import CustomPagination from '../../Custom/Pagination/Pagination'

interface Props {
  shopItems: IShopState['shopItems'],
  categories: IShopItem['categories']
}

export default function RelatedProducts(props: Props) {
  const relatedItems = getRelatedShopItems(props.shopItems, props.categories)

  const pagination = useShopPaginationHook()
  const paginationData = pagination.handlePagination(relatedItems)

  return (
    <div className='related-items'>
      <h2 className='related-items__title'>
        related products
      </h2>

      <ShopItemsList shopItems={paginationData.slicedItems}/>

      <div className='related-items__pagination'>
        <CustomPagination
          itemsPerPage={paginationData.itemsPerPage}
          currentPage={paginationData.currentPage}
          pagesLength={paginationData.pagesLength}
        />
      </div>
    </div>
  )
}
