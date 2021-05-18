import React from 'react'

import './mainPage.scss'
import Header from '../../components/Header/Header'
import Elementor from '../../components/Elementor/Elementor'
import MainSlider from '../../components/MainSlider/MainSlider'

function MainPage() {
  return (
    <section className='mainPage'>
      <Header />
      <Elementor />
      <div className='main-content'>
      <MainSlider />
      </div>
    </section>
  )
}

export default MainPage