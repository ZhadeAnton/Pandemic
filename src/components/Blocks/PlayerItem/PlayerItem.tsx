import React from 'react'
import { useHistory } from 'react-router';

import './playersItem.scss'
import { IPlayer } from '../../../interfaces'

interface Props {
  player: IPlayer,
}

export default function PlayerItem(props: Props) {
  const history = useHistory()

  const handleSelectPlayer = (player: IPlayer) => {
    history.push({
      pathname: `/player/${player.id}`,
      state: player
    });
  };

  return (
    <div
      className='player'
      onClick={() => handleSelectPlayer(props.player)}
    >
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
