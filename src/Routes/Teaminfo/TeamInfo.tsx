import React from 'react'

import './teamInfo.scss'
import { ITeamContainer } from '../../Containers/TeamContainer'

import SponsorsSlider from '../../Components/Blocks/SponsorsSlider/SponsorsSlider'
import ParallaxHeading from '../../Components/Sections/ParallaxHeading/ParallaxHeading'
import PlayersList from '../../Components/Blocks/PlayersList/PlayersList'
import Footer from '../../Components/Sections/Footer/Footer'
import Heading from '../../Components/Blocks/Heading/Heading'

export default function TeamInfo(props: ITeamContainer) {
  return (
    <main className='team-page'>
      <section className='team-page__main-info'>
        <div className='team-page__main-info--overlay'></div>
        <div className='team-page__main-info--wrapper container'>
          <div className='team-page__main-info--content'>
            <h3 className='team-page__main-info--title'>
              We are <span className='team-page__main-info--title-green'>
                {props.currentTeam.tag}</span> cyber sport team
            </h3>

            <p className='team-page__main-info--desc'>
              {props.currentTeam.about.description}
            </p>
          </div>

          <div className='team-page__main-info--image-wrapper'>
            <img
              className='team-page__main-info--image'
              src={props.currentTeam.logo}
              alt="Team logo"
            />
          </div>
        </div>

        <div className='team-page__main-info--sponsors container'>
          <SponsorsSlider sponsors={props.currentTeam.sponsors}/>
        </div>
      </section>

      <section className='team-page__team'>
        <div className='team-page__team--wrapper container'>
          <div className='team-page__team--heading'>
            <Heading title='our team'/>
          </div>

          <div className='team-page__team--list'>
            <PlayersList players={props.currentTeam.players}/>
          </div>
        </div>
      </section>

      <ParallaxHeading backgroundImage='war'/>
      <Footer />
    </main>
  )
}
