import React from 'react'

import { useAppSelector } from '../Hooks/PreTypedHook';
import useScrollToTop from '../Hooks/ScrollToTopHook';
import { IMatch } from '../Interfaces/MatchInterfaces';

import MatchInfo from '../Routes/MatchInfo/MatchInfo';

export interface IMatchContainer {
  currentMatch: IMatch
}

export default function MatchContainer() {
  const currentMatch = useAppSelector((state) => state.match.currentMatch!)

  // Custom hook witch scrolling to the to of the page with useEffect()
  useScrollToTop()

  return (
    <MatchInfo
      currentMatch={currentMatch}
    />
  )
}
