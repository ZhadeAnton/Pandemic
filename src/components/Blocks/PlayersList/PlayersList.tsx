import React from 'react'

import './playersList.scss'
import { IPlayer } from '../../../interfaces'
import PlayerItem from '../PlayerItem/PlayerItem'

interface Props {
  players: Array<IPlayer>
}

function PlayersList(props: Props) {
  return (
    <div className='players-list'>
      {
        props.players.map((player, idx: number) => {
          return (
            <PlayerItem
              key={idx}
              player={player}
            />
          )
        })
      }
    </div>
  )
}

export default PlayersList
