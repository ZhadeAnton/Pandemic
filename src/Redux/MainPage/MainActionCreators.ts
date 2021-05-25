import { IAnnounce } from '../../interfaces'
import * as actions from './MainActionsTypes'

export const getAnnounces = (): actions.GetAnnounces => ({
  type: actions.GET_ANNOUNCES
})

export const getAnnouncesSuccess = (
    announces: Array<IAnnounce>): actions.GetAnnouncesSuccess => ({
  type: actions.GET_ANNOUNCES_SUCCESS,
  payload: announces
})

export const getLatestMatches = (): actions.GetLatestMatches => ({
  type: actions.GET_LATEST_MATCHES
})

export const getLatestMatchesSuccess = (
    matches: Array<any>): actions.GetLatestMatchesSuccess => ({
  type: actions.GET_LATEST_MATCHES_SUCCESS,
  payload: matches
})

export const setPageNumber = (pageNum: number): actions.SetPageNumber => ({
  type: actions.SET_PAGE_NUMBER,
  payload: pageNum
})

export const setNextPage = (): actions.SetNextPage => ({
  type: actions.SET_NEXT_PAGE
})

export const setPrevPage = (): actions.SetPrevPage => ({
  type: actions.SET_PREV_PAGE
})

export const setFirstPage = (): actions.SetFirstPage => ({
  type: actions.SET_FIRST_PAGE
})

export const setLastPage = (lastPageNumber: number): actions.SetLastPage => ({
  type: actions.SET_LAST_PAGE,
  payload: lastPageNumber
})
