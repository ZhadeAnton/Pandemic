import { IPlayer } from '../../Interfaces/MainInterfaces';
import { IAnnounce, IDiscipline, IMatch } from '../../Interfaces/MainInterfaces';

export const SET_LOADING_TRUE = 'SET_LOADING_TRUE'
export interface SetLoadingTrue {
  type: typeof SET_LOADING_TRUE
}

export const SET_LOADING_FALSE = 'SET_LOADING_FALSE'
export interface SetLoadingFalse {
  type: typeof SET_LOADING_FALSE
}

export const GET_ANNOUNCES = 'GET_ANNOUNCES'
export interface GetAnnounces {
  type: typeof GET_ANNOUNCES
}

export const GET_ANNOUNCES_SUCCESS = 'GET_ANNOUNCES_SUCCESS'
export interface GetAnnouncesSuccess {
  type: typeof GET_ANNOUNCES_SUCCESS,
  payload: Array<IAnnounce>
}

export const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER'
export interface SetPageNumber {
  type: typeof SET_PAGE_NUMBER,
  payload: number
}

export const SET_NEXT_PAGE = 'SET_NEXT_PAGE'
export interface SetNextPage {
  type: typeof SET_NEXT_PAGE
}

export const SET_PREV_PAGE = 'SET_PREV_PAGE'
export interface SetPrevPage {
  type: typeof SET_PREV_PAGE
}

export const SET_FIRST_PAGE = 'SET_FIRST_PAGE'
export interface SetFirstPage {
  type: typeof SET_FIRST_PAGE
}

export const SET_LAST_PAGE = 'SET_LAST_PAGE'
export interface SetLastPage {
  type: typeof SET_LAST_PAGE,
  payload: number
}

export const GET_LIST_OF_DISCIPLINES = 'GET_LIST_OF_DISCIPLINES'
export interface GetListOfDisciplines {
  type: typeof GET_LIST_OF_DISCIPLINES
}

export const GET_LIST_OF_DISCIPLINES_SUCCESS = 'GET_LIST_OF_DISCIPLINES_SUCCESS'
export interface GetListOfDisciplinesSuccess {
  type: typeof GET_LIST_OF_DISCIPLINES_SUCCESS,
  payload: Array<IDiscipline>
}

export const SORT_MATCHES = 'SORT_MATCHES'
export interface SortMatches {
  type: typeof SORT_MATCHES,
  payload: string
}

export const SORT_MATCHES_SUCCESS = 'SORT_MATCHES_SUCCESS'
export interface SortMatchesSuccess {
  type: typeof SORT_MATCHES_SUCCESS,
  payload: Array<IMatch>
}

export const SET_CURRENT_MATCH = 'SET_CURRENT_MATCH'
export interface SetCurrentMatch {
  type: typeof SET_CURRENT_MATCH,
  payload: IMatch
}

export const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER'
export interface SetCurrentPlayer {
  type: typeof SET_CURRENT_PLAYER,
  payload: IPlayer
}

export type Maintypes =
|SetLoadingTrue
|SetLoadingFalse
|GetAnnounces
|GetAnnouncesSuccess
|SetPageNumber
|SetNextPage
|SetPrevPage
|SetFirstPage
|SetLastPage
|GetListOfDisciplines
|GetListOfDisciplinesSuccess
|SortMatches
|SortMatchesSuccess
|SetCurrentMatch
|SetCurrentPlayer
