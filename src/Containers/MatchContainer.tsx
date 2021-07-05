import React from 'react'

import { useAppSelector } from '../Hooks/PreTypedHooks';
import { IMatch } from '../Interfaces/MatchInterfaces';

import MatchInfo from '../Routes/MatchInfo/MatchInfo';

export interface IMatchContainer {
  currentMatch: IMatch
}

export default function MatchContainer() {
  const currentMatch = useAppSelector((state) => state.match.currentMatch!)

  return (
    <MatchInfo
      currentMatch={currentMatch}
    />
  )
}
