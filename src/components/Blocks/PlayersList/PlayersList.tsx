import React from 'react'

import './playersList.scss'
import { IPlayer } from '../../../Interfaces/MainInterfaces'
import PlayerItem from '../PlayerItem/PlayerItem'

interface Props {
  players: Array<IPlayer> | undefined
}

function PlayersList(props: Props) {
  return (
    <div className='players-list'>
      {
        props.players?.map((player, idx: number) => {
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
