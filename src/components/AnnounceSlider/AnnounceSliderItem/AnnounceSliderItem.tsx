import React, { useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import { IAnnounce } from '../../../Interfaces/AnnounceInterfaces'

import './announceSliderItem.scss'

interface Props {
  announceSlide: IAnnounce
}

export default function AnnounceSliderItem(props: Props) {
  const [isVissible, setIsVissible] = useState(false)

  return (
    <div className='announce-slider__item'>
      {
        isVissible &&
        <ReactPlayer
          className='announce-slider__item--player'
          url={props.announceSlide.url}
          width='100%'
          height='100%'
          playing={true}
          stopOnUnmount
          muted
        />
      }

      <i
        className="bi bi-play-circle announce-slider__item--play-icon"
        onClick={() => setIsVissible(!isVissible)}
      />

      <div className='announce-slider__item--image-wrapper'>
        <img
          className='announce-slider__item--image'
          src={`${props.announceSlide.image}`}
          alt='slider image'
        />
      </div>

      <div className='announce-slider__content'>
        <h3 className='announce-slider__content--title'>
          {props.announceSlide.title}
        </h3>

        <span className='announce-slider__content--bottom-line'></span>
      </div>
    </div>
  )
}
