import React from 'react'

import { useAppSelector } from '../Hooks/usePreTypedHook'
import useScrollToTop from '../Hooks/useScrollToTop'
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

  // Custom hook witch scrolling to the to of the page with useEffect()
  useScrollToTop()

  return (
    <PlayerInfo
      currentPlayer={currentPlayer}
      relatedMatch={relatedMatch}
      teammates={teammates}
    />
  )
}
