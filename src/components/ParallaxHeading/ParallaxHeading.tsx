import React from 'react'

import './parallaxHeading.scss'
import ModalButton from '../Custom/ModalButton/ModalButton'
import {ReactComponent as ShapeSVG} from '../../Assets/SVG/shape-second.svg'
import warBackground from '../../Assets/JPG/second-bg.jpg'
import blueBackground from '../../Assets/JPG/bluebg.jpg'
import tournamentBackground from '../../Assets/JPG/tournament.jpg'

interface Props {
  backgroundImage: 'war' | 'blue' | 'tournament'
}

export default function ParallaxHeading(props: Props) {
  const background = props.backgroundImage === 'war'
  ? warBackground
  : props.backgroundImage === 'blue'
  ? blueBackground
  : tournamentBackground

  return (
    <section className='paralax-row'
      style={{
        backgroundImage: 'url(' + background + ')'
      }}
    >
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
