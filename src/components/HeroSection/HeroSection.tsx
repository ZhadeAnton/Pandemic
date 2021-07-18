import React from 'react'
const Slide = require('react-reveal/Slide')
const Zoom = require('react-reveal/Zoom')

import './heroSection.scss'

import { ReactComponent as BottomShape } from '../../Assets/SVG/bottom-shape.svg'
import pandemic from '../../Assets/PNG/pandemic-title.png'
import doctor from '../../Assets/PNG/pandemic-doctor.png'
import ModalButton from '../Custom/ModalButton/ModalButton'
import flameBg from '../../Assets/WEBM/hero_bg.webm'

const HeroSection = () => {
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

        <div className='hero__row--button'>
          <Zoom clear>
            <ModalButton />
          </Zoom>
        </div>
      </div>

      <div className="hero__background">
        <video
          className="hero__background--video"
          autoPlay
          loop
          muted
          src={flameBg}
        >
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
