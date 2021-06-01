import React from 'react'
import StatsLine from '../../components/Blocks/StatsLine/StatsLine'

import './playerInfo.scss'

interface Props {
  location: any
}

function PlayerInfo(props: Props) {
  const {
    photo,
    nickname,
    role,
    stats
  } = (props.location && props.location.state) || {}

  const socialList = [
    {title: 'facebook'},
    {title: 'twitter'},
    {title: 'youtube'},
    {title: 'instagram'},
    {title: 'twitch'},
    {title: 'discord'}
  ]

  return (
    <section className='player-page'>
      <div className='player-page__wrapper container'>
        <div className='player-page__top-row'>
          <div className='player-page__player-image-wrapper'>
            <img
              className='player-page__player-image-wrapper--image'
              src={photo}
              alt={nickname}
            />
          </div>

          <div className='player-page__player-info'>
            <h3 className='player-page__player-info--nickname'>
              {nickname}
            </h3>

            <h4 className='player-page__player-info--role'>
              {role}
            </h4>

            <div className='player-page__player-info--social'>
              <ul className='player-page__player-info--list'>
                {
                  socialList.map((link, idx: number) => {
                    return (
                      <li
                        className='player-page__player-info--list-item'
                        key={idx}
                      >
                        <i className={`bi bi-${link.title}`}></i>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>

        <div className='player-page__stats-row'>
          <StatsLine stats={stats} />
        </div>
      </div>
    </section>
  )
}

export default PlayerInfo
