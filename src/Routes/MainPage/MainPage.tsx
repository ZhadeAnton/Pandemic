import React, { useEffect } from 'react'

import './mainPage.scss'
import { useAppDispatch, useAppSelector } from '../../Hooks/PreTypedHooks'
import {
  getAnnounces,
  getListOfDisciplines,
} from '../../Redux/MainPage/MainActionCreators'
import { sortMatches } from '../../Redux/Match/MatchActionCreators'

import HeroSection from '../../Components/Sections/HeroSection/HeroSection'
import AnnounceSlider from '../../Components/Sections/AnnounceSlider/AnnounceSlider'
import Preloader from '../../Components/Custom/CubePreloader/CubePreloader'
import LatestMatches from '../../Components/Sections/LatestMatches/LatestMatches'

function MainPage() {
  const announces = useAppSelector((state) => state.main.announces)
  const initialLatestmatches = useAppSelector((state) => state.match.initialLatestMatches)
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
