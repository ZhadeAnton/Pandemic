import React from 'react'

import { useAppSelector } from '../Hooks/PreTypedHooks'
import { IMatch } from '../Interfaces/MatchInterfaces'
import { IArrayOfPlayers, IPlayer } from '../Interfaces/PlayerInterfaces'

import PlayerInfo from '../Routes/PlayerInfo/PlayerInfo'

export interface IPlayerContainer {
  currentPlayer: IPlayer,
  relatedMatch: IMatch,
  teammates: IArrayOfPlayers
}

export default function PlayerContainer() {
  const currentPlayer = useAppSelector((state) => state.match.currentPlayer!)
  const relatedMatch = useAppSelector((state) => state.match.currentMatch!)

  const playerTag = currentPlayer.team
  const teammates = relatedMatch.team1.tag === playerTag
    ? relatedMatch.team1.players
    : relatedMatch.team2.players

  return (
    <PlayerInfo
      currentPlayer={currentPlayer}
      relatedMatch={relatedMatch}
      teammates={teammates}
    />
  )
}
