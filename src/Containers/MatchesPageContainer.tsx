import React from 'react'

import { useAppSelector } from '../Hooks/usePreTypedHook'
import useSliceItems from '../Hooks/useSliceItems'
import { ArrayOfIDisciplines } from '../Interfaces/MainInterfaces'
import { ArrayOfMatches } from '../Interfaces/MatchInterfaces'

import MatchesPage from '../Routes/MatchesPage/MatchesPage'

export interface IMatchesContainer {
  slicedMatches: ArrayOfMatches,
  disciplines: ArrayOfIDisciplines,
  initialLatestMatches: string,
  pagesLength: number,
  matchesPerPage: number,
  currentPage: number,
  matchesLength: number,
  isLoading: boolean
}

export default function MatchesPageContainer() {
  const matches = useAppSelector((state) => state.match.matches)
  const initialLatestMatches = useAppSelector((state) => state.match.initialLatestMatches)
  const disciplines = useAppSelector((state) => state.main.disciplines)
  const currentPage = useAppSelector((state) => state.match.currentPage)
  const matchesLength = useAppSelector((state) => state.match.matches.length)
  const isLoading = useAppSelector((state) => state.match.isLoading)
  const matchesPerPage = 5

  const sliceHook = useSliceItems({
    itemsForSlide: matches, currentPage, itemsPerPage: matchesPerPage})

  return (
    <MatchesPage
      slicedMatches={sliceHook.slicedItems}
      disciplines={disciplines}
      initialLatestMatches={initialLatestMatches}
      pagesLength={sliceHook.pagesLength}
      matchesPerPage={matchesPerPage}
      currentPage={currentPage}
      matchesLength={matchesLength}
      isLoading={isLoading}
    />
  )
}
