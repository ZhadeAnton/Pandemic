import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../Hooks/PreTypedHook'
import { ArrayOfIDisciplines } from '../Interfaces/MainInterfaces'
import { ArrayOfMatches } from '../Interfaces/MatchInterfaces'
import { sortMatches } from '../Redux/Match/MatchActionCreators'
import { getAnnounces, getListOfDisciplines } from '../Redux/MainPage/MainActionCreators'

import MainPage from '../Routes/MainPage/MainPage'
import Preloader from '../Components/Custom/Preloader/Preloader'
import useSliceItemsHook from '../Hooks/SliceItemsHook'
import { ArrayOfAnnounces } from '../Interfaces/AnnounceInterfaces'

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
  const matches = useAppSelector((state) => state.match.matches)
  const announces = useAppSelector((state) => state.main.announces)
  const initialLatestMatches = useAppSelector((state) => state.match.initialLatestMatches)
  const disciplines = useAppSelector((state) => state.main.disciplines)
  const matchesPerPage = useAppSelector((state) => state.match.matchesPerPage)
  const currentPage = useAppSelector((state) => state.match.currentPage)
  const matchesLength = useAppSelector((state) => state.match.matches.length)
  const isLoading = useAppSelector((state) => state.match.isLoading)

  const dispatch = useAppDispatch()

  const slisedItems = useSliceItemsHook({
    itemsForSlide: matches, currentPage, itemsPerPage: matchesLength})

  useEffect(() => {
    dispatch(getAnnounces())
    dispatch(getListOfDisciplines())
    dispatch(sortMatches(initialLatestMatches))
  }, [])

  if (announces.length === 0) return <Preloader preloader='cube'/>

  return (
    <MainPage
      announces={announces}
      slicedMatches={slisedItems.slicedItems}
      disciplines={disciplines}
      initialLatestMatches={initialLatestMatches}
      pagesLength={slisedItems.pagesLength}
      matchesPerPage={matchesPerPage}
      currentPage={currentPage}
      matchesLength={matchesLength}
      isLoading={isLoading}
    />
  )
}
