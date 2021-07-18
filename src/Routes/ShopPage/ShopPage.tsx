import React from 'react'

import './shopPage.scss'
import { IShopPageContainer } from '../../Containers/ShopContainer'

import SectionBanner from '../../Components/SectionBanner/SectionBanner'
import Footer from '../../Components/Footer/Footer'
import CartShowResult from '../../Components/Cart/CartShowResult/CartShowResult'
import CustomDropdown from '../../Components/Custom/CustomDropdown/CustomDropdown'
import ShopItemsList from '../../Components/Shop/ShopItemsList/ShopItemsList'
import CustomPagination from '../../Components/Pagination/Pagination'
import ParallaxHeading from '../../Components/ParallaxHeading/ParallaxHeading'

const ShopPage = (props: IShopPageContainer) => {
  return (
    <main className='shop'>
      <SectionBanner sectionName='Shop'/>

      <section className='shop__section-list container'>
        <div className='shop__top-row container'>
          <div className='shop__result'>
            <CartShowResult itemsLength={props.slicedItemsLength}/>
          </div>

          <div className='shop__filters'>
            <CustomDropdown
              filter
              activeElement={props.filterBy}
              sortFn={props.onFilterItems}
              sortingNames={props.filteringNames}
            />

            <CustomDropdown
              sort
              activeElement={props.sortedBy}
              sortFn={props.onSortItems}
              sortingNames={props.sortingNames}
            />
          </div>
        </div>

        <ShopItemsList
          shopItems={props.sortedItems}
          handleAddItemToCart={props.handleAddItemToCart}
        />

        <div className='shop__pagination'>
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

export default ShopPage
