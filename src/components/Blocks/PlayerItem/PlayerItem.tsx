import React from 'react'

import './playersItem.scss'
import { IPlayer } from '../../../interfaces'

interface Props {
  player: IPlayer
}

function PlayerItem(props: Props) {
  return (
    <div className='player'>
      <div className='player__wrapper'>
        <div className='player__image-wrapper'>
          <img
            className='player__image-wrapper--image'
            src={props.player.photo}
            alt={props.player.nickname}
          />
        </div>

        <div className='player__content'>
          <h4 className='player__content--nickname'>
            {props.player.nickname}
          </h4>

          <h6 className='player__content--role'>
            {props.player.role}
          </h6>
        </div>
      </div>
    </div>
  )
}

export default PlayerItem