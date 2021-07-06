import React from 'react'

import './parallaxHeading.scss'
import ModalButton from '../../Custom/ModalButton/ModalButton'
import {ReactComponent as ShapeSVG} from '../../../Assets/SVG/shape-second.svg'

export default function ParallaxHeading() {
  return (
    <section className='paralax-row'>
      <div className='paralax-row__overlay'></div>

      <div className='paralax-row__shape'>
        <ShapeSVG />
      </div>

      <div className='paralax-row__content container'>
        <h2 className='paralax-row__content--title'>
          Are you Ready for your esports journey? <br />
          Then what are you waiting for!
        </h2>

        <div className='paralax-row__content--button'>
          <ModalButton />
        </div>
      </div>
    </section>
  )
}
