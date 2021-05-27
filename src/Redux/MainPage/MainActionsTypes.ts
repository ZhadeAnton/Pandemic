import { IAnnounce, IMatch } from './../../interfaces';

export const GET_ANNOUNCES = 'GET_ANNOUNCES'
export interface GetAnnounces {
  type: typeof GET_ANNOUNCES
}

export const GET_ANNOUNCES_SUCCESS = 'GET_ANNOUNCES_SUCCESS'
export interface GetAnnouncesSuccess {
  type: typeof GET_ANNOUNCES_SUCCESS,
  payload: Array<IAnnounce>
}

export const GET_LATEST_MATCHES = 'GET_LATEST_MATCHES'
export interface GetLatestMatches {
  type: typeof GET_LATEST_MATCHES
}

export const GET_LATEST_MATCHES_SUCCESS = 'GET_LATEST_MATCHES_SUCCESS'
export interface GetLatestMatchesSuccess {
  type: typeof GET_LATEST_MATCHES_SUCCESS,
  payload: Array<IMatch>
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
  payload: Array<string>
}


export type Maintypes =
|GetAnnounces
|GetAnnouncesSuccess
|GetLatestMatches
|GetLatestMatchesSuccess
|SetPageNumber
|SetNextPage
|SetPrevPage
|SetFirstPage
|SetLastPage
|GetListOfDisciplines
|GetListOfDisciplinesSuccess
