import { IAnnounce } from './../../interfaces';

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
  payload: Array<any>
}

export type Maintypes =
|GetAnnounces
|GetAnnouncesSuccess
|GetLatestMatches
|GetLatestMatchesSuccess
