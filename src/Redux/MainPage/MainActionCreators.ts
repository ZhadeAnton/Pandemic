import { IPlayer, ITeam } from '../../Interfaces/MainInterfaces';
import { IAnnounce, IDiscipline, IMatch } from '../../Interfaces/MainInterfaces'
import * as actions from './MainActionsTypes'

export const setLoadingTrue = (): actions.SetLoadingTrue => ({
  type: actions.SET_LOADING_TRUE
})

export const setLoadingFalse = (): actions.SetLoadingFalse => ({
  type: actions.SET_LOADING_FALSE
})

export const getAnnounces = (): actions.GetAnnounces => ({
  type: actions.GET_ANNOUNCES
})

export const getAnnouncesSuccess = (
    announces: Array<IAnnounce>): actions.GetAnnouncesSuccess => ({
  type: actions.GET_ANNOUNCES_SUCCESS,
  payload: announces
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

export const getListOfDisciplines = (): actions.GetListOfDisciplines => ({
  type: actions.GET_LIST_OF_DISCIPLINES
})

export const getListOfDisciplinesSuccess = (
    disciplines: Array<IDiscipline>): actions.GetListOfDisciplinesSuccess => ({
  type: actions.GET_LIST_OF_DISCIPLINES_SUCCESS,
  payload: disciplines
})

export const sortMatches = (
    discipline: string): actions.SortMatches => ({
  type: actions.SORT_MATCHES,
  payload: discipline
})

export const sortMatchesSuccess = (
    sortedMatches: Array<IMatch>): actions.SortMatchesSuccess => ({
  type: actions.SORT_MATCHES_SUCCESS,
  payload: sortedMatches
})

export const setCurrentMatch = (currentMatch: IMatch): actions.SetCurrentMatch => ({
  type: actions.SET_CURRENT_MATCH,
  payload: currentMatch
})

export const setCurrentPlayer = (player: IPlayer): actions.SetCurrentPlayer => ({
  type: actions.SET_CURRENT_PLAYER,
  payload: player
})

export const setCurrentTeam = (team: ITeam): actions.SetCurrentTeam => ({
  type: actions.SET_CURRENT_TEAM,
  payload: team
})
