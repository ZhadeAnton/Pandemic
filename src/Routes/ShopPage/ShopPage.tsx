import React from 'react'
import Breadcrumbs from '../../Components/Blocks/Breadcrumbs/Breadcrumbs'
import Heading from '../../Components/Blocks/Heading/Heading'

import './shopPage.scss'

export default function ShopPage() {
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
    </main>
  )
}
