import React from 'react'

import './mainPage.scss'
import Header from '../../components/Header/Header'
import Elementor from '../../components/Elementor/Elementor'
import AnnounceSlider from '../../components/AnnounceSlider/AnnounceSlider'

function MainPage() {
  return (
    <section className='mainPage'>
      <Header />
      <Elementor />
      <div className='main-content'>
        <AnnounceSlider />
      </div>
    </section>
  )
}

export default MainPage
