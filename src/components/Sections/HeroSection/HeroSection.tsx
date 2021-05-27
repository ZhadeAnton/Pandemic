import React from 'react'
const Slide = require('react-reveal/Slide')
const Zoom = require('react-reveal/Zoom')

import './heroSection.scss'
import { ReactComponent as BottomShape } from '../../../assets/bottom-shape.svg'
import pandemic from '../../../assets/landing-logo.png'
import doctor from '../../../assets/pdoctor.png'
import BrandButton from '../../Custom/BrandButton/BrandButton'

const HeroSection = () => {
  // eslint-disable-next-line max-len
  const videoSource = 'https:\/\/skywarriorthemes.com\/pandemic\/wp-content\/uploads\/2021\/01\/hero_landings.webm'
  return (
    <div className='hero'>
      <div className='hero__row'>
        <Slide top>
          <img
            className='hero__row--pandemic'
            src={pandemic}
            alt="pandemic"
          />
        </Slide>

        <Zoom clear>
          <BrandButton className='hero__row--button'/>
        </Zoom>
      </div>

      <div className="hero__background">
        <video
          className="hero__background--video"
          autoPlay
          loop
          muted
        >
          <source
            src={videoSource}
            type="video/webm"
          />
            Your browser does not support the video tag.
        </video>
      </div>

      <BottomShape className='hero__shape'/>

      <img
        className='hero__doctor d-none d-md-flex'
        src={doctor}
        alt="pandemic doctor"
      />
    </div>
  )
}

export default HeroSection
