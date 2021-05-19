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

export type Maintypes =
|GetAnnounces
|GetAnnouncesSuccess
