import React, { Component } from "react";
import Slider from "react-slick";

import './slider.scss'

import first from '../../assets/main-slider/1.jpg'
import two from '../../assets/main-slider/2.jpg'
import three from '../../assets/main-slider/3.jpg'
import four from '../../assets/main-slider/4.jpg'

export default class SimpleSlider extends Component {
  render() {
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
    };
    return (
      <div className='main-slider'>
        <Slider {...settings}>
          <div className='main-slider-item'>
            <div className='main-slider-item__image-wrap'>
                <img src={two} alt="1" className='main-slider__img'/>
            </div>

            <div className='main-slider-item__content'>
              <h3>Title supel long with ver long title supeasdasd</h3>
              <span></span>
            </div>
          </div>

          <div className='main-slider-item'>
            <div className='main-slider-item__image-wrap'>
              <img src={three} alt="1" className='main-slider__img'/>
            </div>
          </div>

          <div className='main-slider-item'>
          <div className='main-slider-item__image-wrap'>
              <img src={two} alt="1" className='main-slider__img'/>
            </div>
          </div>

          <div className='main-slider-item'>
          <div className='main-slider-item__image-wrap'>
              <img src={four} alt="1" className='main-slider__img'/>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}