import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../Hooks/PreTypedHooks'
import { ArrayOfAnnounces, ArrayOfIDisciplines } from '../Interfaces/MainInterfaces'
import { ArrayOfMatches } from '../Interfaces/MatchInterfaces'
import { sortMatches } from '../Redux/Match/MatchActionCreators'
import { getAnnounces, getListOfDisciplines } from '../Redux/MainPage/MainActionCreators'

import MainPage from '../Routes/MainPage/MainPage'
import Preloader from '../Components/Custom/CubePreloader/CubePreloader'

export interface IMainPagecontainer {
  announces: ArrayOfAnnounces,
  slicedMatches: ArrayOfMatches,
  disciplines: ArrayOfIDisciplines,
  initialLatestMatches: string,
  pagesLength: number,
  matchesPerPage: number,
  currentPage: number,
  matchesLength: number,
  isLoading: boolean
}

export default function MainPageContainer() {
  const announces = useAppSelector((state) => state.main.announces)
  const initialLatestMatches = useAppSelector((state) => state.match.initialLatestMatches)
  const disciplines = useAppSelector((state) => state.main.disciplines)
  const matchesPerPage = useAppSelector((state) => state.match.matchesPerPage)
  const currentPage = useAppSelector((state) => state.match.currentPage)
  const matchesLength = useAppSelector((state) => state.match.matches.length)
  const isLoading = useAppSelector((state) => state.match.isLoading)

  const dispatch = useAppDispatch()

  // Indexes of first and last items
  const indexOfLastMatch = currentPage * matchesPerPage
  const indexOfFirstMatch = indexOfLastMatch - matchesPerPage

  // Slicing items by indexes of first and last items
  const slicedMatches = useAppSelector((state) => state.match.matches
      .slice(indexOfFirstMatch, indexOfLastMatch))

  // Count of pagination buttons
  const pagesLength = Math.ceil(matchesLength / matchesPerPage)

  useEffect(() => {
    dispatch(getAnnounces())
    dispatch(getListOfDisciplines())
    dispatch(sortMatches(initialLatestMatches))
  }, [])

  if (announces.length === 0) return <Preloader />

  return (
    <MainPage
      announces={announces}
      slicedMatches={slicedMatches}
      disciplines={disciplines}
      initialLatestMatches={initialLatestMatches}
      pagesLength={pagesLength}
      matchesPerPage={matchesPerPage}
      currentPage={currentPage}
      matchesLength={matchesLength}
      isLoading={isLoading}
    />
  )
}
