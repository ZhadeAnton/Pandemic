import React, { useEffect } from 'react'

import './shopPage.scss'
import { useAppDispatch, useAppSelector } from '../../Hooks/PreTypedHooks'
import { getShopItems } from '../../Redux/Shop/ShopActionCreators'

import Preloader from '../../Components/Custom/CubePreloader/CubePreloader'
import ShopProducts from '../../Components/Sections/ShopListSection/ShopListSection'
import Footer from '../../Components/Sections/Footer/Footer'
import SectionBanner from '../../Components/Sections/SectionBanner/SectionBanner'

export default function ShopPage() {
  const isLoading = useAppSelector((state) => state.shop.isLoading)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getShopItems())
  }, [])

  if (isLoading) {
    return <Preloader />
  } else {
    return (
      <main className='shop'>
        <SectionBanner sectionName='Shop'/>

        <section className='shop__section-list container'>
          <ShopProducts />
        </section>

        <Footer />
      </main>
    )
  }
}
