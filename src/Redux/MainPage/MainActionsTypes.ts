import { IAnnounce, IDiscipline } from '../../Interfaces/MainInterfaces';

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

export const GET_LIST_OF_DISCIPLINES = 'GET_LIST_OF_DISCIPLINES'
export interface GetListOfDisciplines {
  type: typeof GET_LIST_OF_DISCIPLINES
}

export const GET_LIST_OF_DISCIPLINES_SUCCESS = 'GET_LIST_OF_DISCIPLINES_SUCCESS'
export interface GetListOfDisciplinesSuccess {
  type: typeof GET_LIST_OF_DISCIPLINES_SUCCESS,
  payload: Array<IDiscipline>
}

export type MatchTypes =
|SetLoadingTrue
|SetLoadingFalse
|GetAnnounces
|GetAnnouncesSuccess
|GetListOfDisciplines
|GetListOfDisciplinesSuccess
