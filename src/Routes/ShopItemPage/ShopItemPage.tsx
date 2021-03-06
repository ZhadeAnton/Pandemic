import React from 'react'

import './shopItemPage.scss'

import ShopItemInfo from '../../Components/Shop/ShopItemInfo/ShopItemInfo'
import ReviewsTabs from '../../Components/Login/ReviewsTabs/ReviewsTabs'
import Footer from '../../Components/Footer/Footer'
import {
  IShopItemPageContainer
} from '../../Containers/ShopItemContainer'
import ShopItemsList from '../../Components/Shop/ShopItemsList/ShopItemsList'
import CustomPagination from '../../Components/Pagination/Pagination'
import ParallaxHeading from '../../Components/ParallaxHeading/ParallaxHeading'

export default function ShopItemPage(props: IShopItemPageContainer) {
  return (
    <main className='shop-item-page'>
      <section className='shop-item-page__section-item-info'>
        <ShopItemInfo
          currentItem={props.currentItem}
          handleAddItemToCart={props.handleAddItemToCart}
        />
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
          handleAddItemToCart={props.handleAddItemToCart}
        />

        <div className='shop-item-page__related-items--pagination'>
          <CustomPagination
            itemsPerPage={props.itemsPerPage}
            currentPage={props.currentPage}
            pagesLength={props.pagesLength}
          />
        </div>
      </section>

      <ParallaxHeading backgroundImage='blue'/>

      <Footer />
    </main>
  )
}
