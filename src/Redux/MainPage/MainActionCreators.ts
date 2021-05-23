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
