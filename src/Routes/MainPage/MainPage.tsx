import React from 'react'

import './mainPage.scss'
import Header from '../../components/Header/Header'
import Elementor from '../../components/Elementor/Elementor'

function MainPage() {
  return (
    <section className='mainPage'>
      <Header />
      <Elementor />
    </section>
  )
}

export default MainPage