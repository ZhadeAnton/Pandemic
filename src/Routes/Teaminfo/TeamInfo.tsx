import React from 'react'

import { useAppSelector } from '../../Hooks/PreTypedHooks'

import './teamInfo.scss'
import SponsorsSlider from '../../Components/Blocks/SponsorsSlider/SponsorsSlider'
import Footer from '../../Components/Sections/Footer/Footer'
import ParallaxHeading from '../../Components/Sections/ParallaxHeading/ParallaxHeading'

export default function TeamInfo() {
  const currentTeam = useAppSelector((state) => state.match.currentTeam)

  return (
    <main className='team-page'>
      <section className='team-page__main-info'>
        <div className='team-page__main-info--overlay'></div>
        <div className='team-page__main-info--wrapper container'>
          <div className='team-page__main-info--content'>
            <h3 className='team-page__main-info--title'>
              We are <span className='team-page__main-info--title-green'>
                {currentTeam!.tag}</span> cyber sport team
            </h3>

            <p className='team-page__main-info--desc'>
              {currentTeam?.about.description}
            </p>
          </div>

          <div className='team-page__main-info--image-wrapper'>
            <img
              className='team-page__main-info--image'
              src={currentTeam!.logo}
              alt="Team logo"
            />
          </div>
        </div>

        <div className='team-page__main-info--sponsors container'>
          <SponsorsSlider sponsors={currentTeam!.sponsors}/>
        </div>
      </section>

      <div className='team-page__parallax'>
        <ParallaxHeading />
      </div>
      <Footer />
    </main>
  )
}
