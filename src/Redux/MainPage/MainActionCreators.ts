import { IAnnounce, IDiscipline } from '../../Interfaces/MainInterfaces'
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

export const getListOfDisciplines = (): actions.GetListOfDisciplines => ({
  type: actions.GET_LIST_OF_DISCIPLINES
})

export const getListOfDisciplinesSuccess = (
    disciplines: Array<IDiscipline>): actions.GetListOfDisciplinesSuccess => ({
  type: actions.GET_LIST_OF_DISCIPLINES_SUCCESS,
  payload: disciplines
})
