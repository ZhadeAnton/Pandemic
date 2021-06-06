import React from 'react'
import { useAppSelector } from '../../Hooks/PreTypedHooks'

import './teamInfo.scss'

export default function TeamInfo() {
  const currentTeam = useAppSelector((state) => state.match.currentTeam)

  return (
    <main className='team-page'>
      <section className='team-page__main-info container'>
        <div className='team-page__main-info--wrapper'>
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
      </section>
    </main>
  )
}
