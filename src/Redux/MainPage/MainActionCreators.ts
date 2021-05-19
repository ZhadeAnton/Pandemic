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
