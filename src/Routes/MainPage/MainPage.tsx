import React, { useEffect } from 'react'

import './mainPage.scss'
import { useAppDispatch, useAppSelector } from '../../PreTypedHooks'
import {
  getAnnounces,
  getListOfDisciplines,
  sortMatches
} from '../../Redux/MainPage/MainActionCreators'

import HeroSection from '../../components/Sections/HeroSection/HeroSection'
import AnnounceSlider from '../../components/Sections/AnnounceSlider/AnnounceSlider'
import Preloader from '../../components/Custom/CubePreloader/CubePreloader'
import LatestMatches from '../../components/Sections/LatestMatches/LatestMatches'

function MainPage() {
  const announces = useAppSelector((state) => state.main.announces)
  const initialLatestmatches = useAppSelector((state) => state.main.initialLatestMatches)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAnnounces())
    dispatch(getListOfDisciplines())
    dispatch(sortMatches(initialLatestmatches))
  }, [])

  if (announces.length === 0) {
    return <Preloader />
  } else {
    return (
      <section className='mainPage'>
        <HeroSection />
        <div className='main-content'>
          <AnnounceSlider
            announces={announces}
          />

          <LatestMatches />
        </div>
      </section>
    )
  }
}

export default MainPage
