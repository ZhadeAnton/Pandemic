import React from 'react';
import Slider from 'react-slick';
import { MainPageProps } from '../../Containers/MainContainer';
import { IAnnounce } from '../../interfaces';

import './announceSlider.scss'

interface Props {
  announces: MainPageProps['announces']
}

function AnnounceSlider(props: Props) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    prevArrow: <button type="button"><span>Previous</span></button>,
    nextArrow: <button type="button"><span>Next</span></button>,
    variableWidth: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          variableWidth: false,
        }
      }
    ]
  }

  return (
    <div className='announce-slider'>
      <Slider {...settings}>
        {
          props.announces.map((slide: IAnnounce, idx: number) => {
            return (
              <div className='announce-slider-item' key={idx}>
                <div className='announce-slider-item__image-wrap'>
                  <img
                    src={`${slide.image}`}
                    alt='slider image'
                    className='announce-slider__img'
                  />
                </div>

                <div className='announce-slider-item__content'>
                  <h3>{slide.title}</h3>
                  <span></span>
                </div>
              </div>
            )
          })
        }
      </Slider>
    </div>
  );
}

export default AnnounceSlider
