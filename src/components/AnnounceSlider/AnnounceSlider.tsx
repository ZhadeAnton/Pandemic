import React from 'react';
import Slider from 'react-slick';

import './announceSlider.scss'
import slide1 from '../../assets/main-slider/1.jpg'
import slide2 from '../../assets/main-slider/2.jpg'
import slide3 from '../../assets/main-slider/3.jpg'
import slide4 from '../../assets/main-slider/4.jpg'
import slide5 from '../../assets/main-slider/5.jpg'

function AnnounceSlider() {
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

  const sliderContent = [
    {title: 'The Finals | Amazon University Esports', img: slide1},
    {title: 'PG Nats Staff Rumble', img: slide2},
    {title: 'All Star EU/NA | Day 3', img: slide3},
    {title: 'Knockout - FPS All-Star', img: slide4},
    {title: 'New Cyber Sport Arena is comming soon | 2021 ', img: slide5},
  ]

  return (
    <div className='announce-slider'>
      <Slider {...settings}>
        {
          sliderContent.map((slide, idx) => {
            return (
              <div className='announce-slider-item' key={idx}>
                <div className='announce-slider-item__image-wrap'>
                  <img
                    src={slide.img}
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
