import React from 'react'

import './playerInfo.scss'

function PlayerInfo() {
  return (
    <section className='player-page'>
      <div className='player-page__wrapper'>
        <div className='player-page__stats-row'>
          <div className='player-page__player-image-wrapper'>
            <img
              className='player-page__player-image-wrapper--image'
              src="/"
              alt="/"
            />
          </div>

          <div className='player-page__player-info'>
            <h3 className='player-page__player-info--nickname'>

            </h3>

            <h4 className='player-page__player-info--role'>

            </h4>
          </div>

          <div className='player-page__player-social'>
            <ul className='player-page__player-social--list'>

            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlayerInfo
