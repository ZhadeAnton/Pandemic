import { INotification } from './../../Interfaces/NotificationInterfaces';

export const ADD_NOTIFICATION = 'ADD_NOTIFICATION'
export interface AddNotification {
  type: typeof ADD_NOTIFICATION,
  payload: INotification
}

export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION'
export interface RemoveNotification {
  type: typeof REMOVE_NOTIFICATION,
  payload: INotification['id']
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

export type GeneralTypes =
|SetPageNumber
|SetNextPage
|SetPrevPage
|SetFirstPage
|SetLastPage
|AddNotification
|RemoveNotification
