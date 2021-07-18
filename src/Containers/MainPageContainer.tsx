import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../Hooks/usePreTypedHook'
import { ArrayOfIDisciplines } from '../Interfaces/MainInterfaces'
import { ArrayOfMatches } from '../Interfaces/MatchInterfaces'
import { sortMatches } from '../Redux/Match/MatchActionCreators'
import { getAnnounces, getListOfDisciplines } from '../Redux/MainPage/MainActionCreators'

import MainPage from '../Routes/MainPage/MainPage'
import Preloader from '../Components/Custom/Preloader/Preloader'
import useSliceItems from '../Hooks/useSliceItems'
import { ArrayOfAnnounces } from '../Interfaces/AnnounceInterfaces'

export interface IMainPageContainer {
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
  const matches = useAppSelector((state) => state.match.matches)
  const announces = useAppSelector((state) => state.main.announces)
  const initialLatestMatches = useAppSelector((state) => state.match.initialLatestMatches)
  const disciplines = useAppSelector((state) => state.main.disciplines)
  const currentPage = useAppSelector((state) => state.match.currentPage)
  const matchesLength = useAppSelector((state) => state.match.matches.length)
  const isLoading = useAppSelector((state) => state.match.isLoading)
  const matchesPerPage = 3

  const dispatch = useAppDispatch()

  const sliceHook = useSliceItems({
    itemsForSlide: matches, currentPage, itemsPerPage: matchesPerPage})

  useEffect(() => {
    dispatch(getAnnounces())
    dispatch(getListOfDisciplines())
    dispatch(sortMatches(initialLatestMatches))
  }, [])

  if (announces.length === 0) return <Preloader preloader='cube'/>

  return (
    <MainPage
      announces={announces}
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
