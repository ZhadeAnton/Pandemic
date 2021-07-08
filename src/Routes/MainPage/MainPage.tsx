import React from 'react'

import './mainPage.scss'
import { IMainPagecontainer } from '../../Containers/MainPageContainer'

import HeroSection from '../../Components/Sections/HeroSection/HeroSection'
import AnnounceSlider from '../../Components/Sections/AnnounceSlider/AnnounceSlider'
import LatestMatches from '../../Components/Sections/LatestMatches/LatestMatches'
import Footer from '../../Components/Sections/Footer/Footer'
import ParallaxHeading from '../../Components/Sections/ParallaxHeading/ParallaxHeading'

function MainPage(props: IMainPagecontainer) {
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
          <ParallaxHeading backgroundImage='blue'/>
        </div>

        <Footer />
      </div>
    </section>
  )
}

export default MainPage
