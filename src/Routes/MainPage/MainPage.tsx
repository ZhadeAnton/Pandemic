import React, { useEffect } from 'react'

import './mainPage.scss'
import { MainPageProps } from '../../Containers/MainContainer'
import Header from '../../components/Header/Header'
import Elementor from '../../components/Elementor/Elementor'
import AnnounceSlider from '../../components/AnnounceSlider/AnnounceSlider'
import GearPreloader from '../../components/GearPreloader/GearPreloader'

function MainPage(props: MainPageProps) {
  useEffect(() => {
    props.getAnnounces()
  }, [])

  if (props.announces.length === 0) {
    return <GearPreloader />
  } else {
    return (
      <section className='mainPage'>
        <Header />
        <Elementor />
        <div className='main-content'>
          <AnnounceSlider
            announces={props.announces}
          />
        </div>
      </section>
    )
  }
}

export default MainPage
