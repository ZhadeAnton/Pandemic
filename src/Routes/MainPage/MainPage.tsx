import React from 'react'

import './mainPage.scss'
import { IMainPageContainer } from '../../Containers/MainPageContainer'

import HeroSection from '../../Components/HeroSection/HeroSection'
import AnnounceSlider from '../../Components/AnnounceSlider/AnnounceSlider'
import LatestMatches from '../../Components/Match/LatestMatches/LatestMatches'
import Footer from '../../Components/Footer/Footer'
import ParallaxHeading from '../../Components/ParallaxHeading/ParallaxHeading'

function MainPage(props: IMainPageContainer) {
  return (
    <section className='main-page'>
      <HeroSection />

      <div className='main-page__content'>
        <AnnounceSlider
          announces={props.announces}
        />

        <LatestMatches
          matchesPerPage={props.matchesPerPage}
          disciplines={props.disciplines}
          initialLatestMatches={props.initialLatestMatches}
          currentPage={props.currentPage}
          matchesLength={props.matchesLength}
          pagesLength={props.pagesLength}
          slicedMatches={props.slicedMatches}
          isLoading={props.isLoading}
        />

        <div className='main-page__parallax'>
          <ParallaxHeading backgroundImage='tournament'/>
        </div>

        <Footer />
      </div>
    </section>
  )
}

export default MainPage
