import React from 'react'
import Slider from 'react-slick';

import './sponsorsSlider.scss'
import { ITeam } from '../../../Interfaces/MainInterfaces';

interface Props {
  sponsors: ITeam['sponsors']
}

export default function SponsorsSlider(props: Props) {
  const settings = {
    infinite: true,
    autoplay: true,
    mobileFirst: true,
    speed: 400,
    slidesToScroll: 1,
    slidesToShow: 4,
    arrows: true,
    prevArrow: <button data-slide-button><span>Previous</span></button>,
    nextArrow: <button data-slide-button><span>Next</span></button>,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  }

  return (
    <div className='sponsor-slider'>
      <Slider {...settings}>
        {
          props.sponsors.map((sponsor, idx: number) => {
            return (
              <div
                className='sponsor-slider__item'
                key={idx}
              >
                <img
                  className='sponsor-slider__item--image'
                  src={sponsor}
                  alt='sponsor'
                />
              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}
