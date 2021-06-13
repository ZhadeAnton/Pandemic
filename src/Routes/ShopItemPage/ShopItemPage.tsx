import React from 'react'

import './shopItemPage.scss'
import { useAppSelector } from '../../Hooks/PreTypedHooks'

import ShopItemInfo from '../../Components/Sections/ShopItemInfo/ShopItemInfo'
import Footer from '../../Components/Sections/Footer/Footer'

export default function ShopItemPage() {
  const currentItem = useAppSelector((state) => state.shop.currentShopItem)

  return (
    <main className='shop-item-page'>
      <section className='shop-item-page__section-item-info'>
        <ShopItemInfo currentItem={currentItem}/>
      </section>

      <Footer />
    </main>
  )
}
