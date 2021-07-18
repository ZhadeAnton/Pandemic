import React from 'react'

import { useAppSelector } from '../Hooks/usePreTypedHook'
import useScrollToTop from '../Hooks/useScrollToTop'
import { ITeam } from '../Interfaces/TeamInterfaces'

import TeamInfo from '../Routes/Teaminfo/TeamInfo'

export interface ITeamContainer {
  currentTeam: ITeam
}

export default function TeamContainer() {
  const currentTeam = useAppSelector((state) => state.match.currentTeam!)

  // Custom hook witch scrolling to the to of the page with useEffect()
  useScrollToTop()

  return (
    <TeamInfo
      currentTeam={currentTeam}
    />
  )
}
