import React from 'react'

import './mainPage.scss'
import { IMainPagecontainer } from '../../Containers/MainPageContainer'

import HeroSection from '../../Components/Sections/HeroSection/HeroSection'
import AnnounceSlider from '../../Components/Sections/AnnounceSlider/AnnounceSlider'
import LatestMatches from '../../Components/Sections/LatestMatches/LatestMatches'

function MainPage(props: IMainPagecontainer) {
  return (
    <section className='mainPage'>
      <HeroSection />
      <div className='main-content'>
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
      </div>
    </section>
  )
}

export default MainPage
