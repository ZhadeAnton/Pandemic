import React from 'react'

import './shopItemPage.scss'

import ShopItemInfo from '../../Components/Sections/ShopItemInfo/ShopItemInfo'
import ReviewsTabs from '../../Components/Custom/ReviewsTabs/ReviewsTabs'
import Footer from '../../Components/Sections/Footer/Footer'
import {
  IShopItemPageContainer
} from '../../Containers/ShopItemPageContainer'
import ShopItemsList from '../../Components/Blocks/ShopItemsList/ShopItemsList'
import CustomPagination from '../../Components/Custom/Pagination/Pagination'

export default function ShopItemPage(props: IShopItemPageContainer) {
  return (
    <main className='shop-item-page'>
      <section className='shop-item-page__section-item-info'>
        <ShopItemInfo currentItem={props.currentItem}/>
      </section>

      <section className='shop-item-page__section-review container'>
        <ReviewsTabs
          itemName={props.currentItem!.title}
          description={props.currentItem!.description}
          reviews={props.currentItem!.reviews}
        />
      </section>

      <section className='shop-item-page__related-items container'>
        <h2 className='shop-item-page__related-items--title'>
          related products
        </h2>

        <ShopItemsList
          shopItems={props.slicedItems}
          userUid={props.userUid}
        />

        <div className='shop-item-page__related-items--pagination'>
          <CustomPagination
            itemsPerPage={props.itemsPerPage}
            currentPage={props.currentPage}
            pagesLength={props.pagesLength}
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
