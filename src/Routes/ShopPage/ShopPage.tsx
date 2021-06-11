import React, { useEffect } from 'react'

import './shopPage.scss'
import { useAppDispatch, useAppSelector } from '../../Hooks/PreTypedHooks'
import { getShopItems } from '../../Redux/Shop/ShopActionCreators'

import Heading from '../../Components/Blocks/Heading/Heading'
import Breadcrumbs from '../../Components/Blocks/Breadcrumbs/Breadcrumbs'
import Preloader from '../../Components/Custom/CubePreloader/CubePreloader'
import ShopProducts from '../../Components/Sections/ShopListSection/ShopListSection'

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
        <section className='shop__section-banner'>
          <div className='shop__section-banner--overlay'></div>
          <div className='shop__section-banner--wrapper container'>
            <div className='shop__section-banner--content'>
              <Heading title='shop'/>

              <div className='shop__section-banner--breadcrumbs'>
                <Breadcrumbs crumbs={['Home', 'Shop']} />
              </div>
            </div>
          </div>
        </section>

        <section className='shop__section-list container'>
          <ShopProducts />
        </section>
      </main>
    )
  }
}
