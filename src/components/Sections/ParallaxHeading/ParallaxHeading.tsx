import React from 'react'

import './parallaxHeading.scss'
import BrandButton from '../../Custom/BrandButton/BrandButton'
import {ReactComponent as ShapeSecond} from '../../../Assets/SVG/shape-second.svg'

export default function ParallaxHeading() {
  return (
    <section className='paralax-row'>
      <div className='paralax-row__overlay'></div>
      <div className='paralax-row__shape'>
        <ShapeSecond />
      </div>

      <div className='paralax-row__content container'>
        <h2 className='paralax-row__content--title'>
          Are you Ready for your esports journey? <br />
          Then what are you waiting for!
        </h2>

        <BrandButton className='paralax-row__content--button'/>
      </div>
    </section>
  )
}
