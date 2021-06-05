import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import Slider from 'react-slick';

import './announceSlider.scss'
import { IAnnounce } from '../../../Interfaces/MainInterfaces';
import { MainState } from '../../../Redux/MainPage/MainReducer';

interface Props {
  announces: MainState['announces']
}

function AnnounceSlider(props: Props) {
  const [activeSlide, setActiveSlide] = useState<number>(1)

  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    arrows: true,
    prevArrow: <button type="button"><span>Previous</span></button>,
    nextArrow: <button type="button"><span>Next</span></button>,
    beforeChange: (_: any, next: number) => setActiveSlide(next + 1),
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
              <div className='announce-slider__item' key={idx}>
                <div className='announce-slider__item--image-wrapper'>
                  <img
                    className='announce-slider__item--image'
                    src={`${slide.image}`}
                    alt='slider image'
                  />
                </div>

                <div className='announce-slider__content'>
                  <h3 className='announce-slider__content--title'>
                    {slide.title}
                  </h3>

                  <span className='announce-slider__content--bottom-line'></span>
                </div>
              </div>
            )
          })
        }
      </Slider>

      <div className='announce-slider__progress-bar'>
        <div className='announce-slider__progress-bar--wrapper'>
          <span className='announce-slider__progress-bar--number'>
            {
              activeSlide <= 9
              ? '0' + activeSlide
              : activeSlide
            }
          </span>

          <ProgressBar
            bsPrefix='announce-slider__progress-bar--main'
            now={activeSlide}
            max={props.announces.length}
            min={0}
            animated={true}
          />

          <span className='announce-slider__progress-bar--number'>
            {
              props.announces.length <= 9
              ? '0' + props.announces.length
              : props.announces.length
            }
          </span>
        </div>
      </div>
    </div>
  );
}

export default AnnounceSlider
