import React, { useEffect } from 'react'

import './mainPage.scss'
import { MainPageProps } from '../../Containers/MainContainer'
import Header from '../../components/Sections/Header/Header'
import HeroSection from '../../components/Sections/HeroSection/HeroSection'
import AnnounceSlider from '../../components/Sections/AnnounceSlider/AnnounceSlider'
import Preloader from '../../components/Custom/CubePreloader/CubePreloader'
import LatestMatches from '../../components/Sections/LatestMatches/LatestMatches'

function MainPage(props: MainPageProps) {
  useEffect(() => {
    props.getAnnounces()
    props.getListOfDisciplines()
    props.sortMatches('Overwatch')
  }, [])

  if (props.announces.length === 0) {
    return <Preloader />
  } else {
    return (
      <section className='mainPage'>
        <Header />
        <HeroSection />
        <div className='main-content'>
          <AnnounceSlider
            announces={props.announces}
          />

          <LatestMatches
            matches={props.matches}
            isLoading={props.isLoading}
            disciplines={props.disciplines}
            currentPage={props.currentPage}
            matchesPerPage={props.matchesPerPage}
            setFirstPage={props.setFirstPage}
            setLastPage={props.setLastPage}
            setNextPage={props.setNextPage}
            setPageNumber={props.setPageNumber}
            setPrevPage={props.setPrevPage}
            sortMatches={props.sortMatches}
          />
        </div>
      </section>
    )
  }
}

export default MainPage
