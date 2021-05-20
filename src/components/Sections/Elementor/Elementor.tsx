import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-solid-svg-icons'

import './elementor.scss'
import { ReactComponent as BottomShape } from '../../../assets/bottom-shape.svg'
import pandemic from '../../../assets/landing-logo.png'
import doctor from '../../../assets/pdoctor.png'

const Elementor = () => {
  // eslint-disable-next-line max-len
  const videoSource = 'https:\/\/skywarriorthemes.com\/pandemic\/wp-content\/uploads\/2021\/01\/hero_landings.webm'
  return (
    <div className='elementor'>
      <div className='elementor-row'>
        <img
          className='elementor-row__pandemic top-appear'
          src={pandemic}
          alt="pandemic"
        />

        <div className='elementor-row__button fade-in-with-delay'>
          <a href="/">
            <FontAwesomeIcon icon={faGem}/>
            check out the demo
          </a>
        </div>

        <img
          className='elementor-row__doctor d-none d-md-flex fade-in'
          src={doctor}
          alt="pandemic"
        />
      </div>

      <div className="elementor-background-video-container">
        <video className="elementor-background-video" autoPlay loop muted>
          <source src={videoSource} type="video/webm" />
            Your browser does not support the video tag.
        </video>
      </div>

      <div className='elementor-shape-bottom'>
        <BottomShape />
      </div>
    </div>
  )
}

export default Elementor
