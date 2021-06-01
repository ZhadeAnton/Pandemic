import React from 'react'

import './playerSocial.scss'

const socialList = [
  {title: 'facebook'},
  {title: 'twitter'},
  {title: 'youtube'},
  {title: 'instagram'},
  {title: 'twitch'},
  {title: 'discord'}
]

export default function PlayerSocial() {
  return (
    <ul className='player-social-list'>
      {
        socialList.map((link, idx: number) => {
          return (
            <li
              className='player-social-list__item'
              key={idx}
            >
              <i className={`bi bi-${link.title}`}></i>
            </li>
          )
        })
      }
    </ul>
  )
}
