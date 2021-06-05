import React from 'react'

import './playerFollow.scss'

const followList = [
  {icon: 'bi bi-twitch', title: 'twitch stream', status: 'offline', active: false},
  {icon: 'bi bi-discord', title: 'discord', status: 'online', active: true},
  {icon: 'bi bi-youtube', title: 'youtube', status: 'offline', active: false},
]

export default function PlayerFollow() {
  return (
    <nav className='player-follow'>
      <ul className='player-follow__list'>
        {
          followList.map((item, idx: number) => {
            return (
              <li key={idx} className='player-follow__item'>
                <i className={`${item.icon} player-follow__item--icon`}></i>

                <h4 className='player-follow__item--title'>
                  {item.title}
                </h4>

                <h6 className={
                  `player-follow__item--status${item.active ? '-active' : ''}`}>
                  {item.status}
                </h6>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}
