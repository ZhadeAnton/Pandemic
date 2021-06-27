import React from 'react'

import './shopItemPage.scss'
import { useAppSelector } from '../../Hooks/PreTypedHooks'

import ShopItemInfo from '../../Components/Sections/ShopItemInfo/ShopItemInfo'
import ReviewsTabs from '../../Components/Custom/ReviewsTabs/ReviewsTabs'
import RelatedProducts from '../../Components/Sections/RelatedProducts/RelatedProducts'
import Footer from '../../Components/Sections/Footer/Footer'
import useScrollToTop from '../../Hooks/ScrollToTopHook'

export default function ShopItemPage() {
  const currentItem = useAppSelector((state) => state.shop.currentShopItem!)
  const shopItems = useAppSelector((state) => state.shop.shopItems)

  // Custom hook witch scrolling to the to of the page with useEffect()
  useScrollToTop()

  return (
    <main className='shop-item-page'>
      <section className='shop-item-page__section-item-info'>
        <ShopItemInfo currentItem={currentItem}/>
      </section>

      <section className='shop-item-page__section-review container'>
        <ReviewsTabs
          itemName={currentItem.title}
          description={currentItem.description}
          reviews={currentItem.reviews}
        />
      </section>

      <section className='container'>
        <RelatedProducts
          shopItems={shopItems}
          categories={currentItem.categories}
        />
      </section>

      <Footer />
    </main>
  )
}
