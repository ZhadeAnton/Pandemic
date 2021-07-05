import React from 'react'

import { useAppSelector } from '../Hooks/PreTypedHooks'
import { ITeam } from '../Interfaces/TeamInterfaces'

import TeamInfo from '../Routes/Teaminfo/TeamInfo'

export interface ITeamContainer {
  currentTeam: ITeam
}

export default function TeamContainer() {
  const currentTeam = useAppSelector((state) => state.match.currentTeam!)

  return (
    <TeamInfo
      currentTeam={currentTeam}
    />
  )
}
