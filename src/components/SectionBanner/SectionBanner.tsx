import React from 'react'

import './sectionBanner.scss'

import Breadcrumbs from '../Custom/Breadcrumbs/Breadcrumbs'
import Heading from '../Heading/Heading'

interface Props {
  sectionName: string
}

export default function SectionBanner(props: Props) {
  return (
    <section className='section-banner'>
      <div className='section-banner__overlay'></div>

      <div
        className='section-banner__wrapper'
        data-banner={`${props.sectionName}`}
      >
        <div className='section-banner__content container'>
          <Heading title={`${props.sectionName}`}/>

          <div className='section-banner__breadcrumbs'>
            <Breadcrumbs crumbs={['Home', `${props.sectionName}`]} />
          </div>
        </div>
      </div>
    </section>
  )
}
