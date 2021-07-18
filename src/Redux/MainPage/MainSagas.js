import {takeLatest, put, all, call} from 'redux-saga/effects'
import * as mainActions from './MainActionCreators'
import * as mainTypes from './MainActionsTypes'
import * as generalActions from '../General/GeneralActionCreators'
import * as api from '../../API/MatchAPI'
import { v4 } from 'uuid'

function* getAnnounces() {
  try {
    const announces = yield api.getAnnounces()
    yield put(mainActions.getAnnouncesSuccess(announces))
  } catch (error) {
    yield put(generalActions.addNotification('ERROR', error.message, v4()))
  }
}

function* getListOfDisciplines() {
  try {
    const listOfDisciplines = yield api.getListOfDiscipines()
    yield put(mainActions.getListOfDisciplinesSuccess(listOfDisciplines))
  } catch (error) {
    yield put(generalActions.addNotification('ERROR', error.message, v4()))
  }
}

function* onGetAnnounces() {
  yield takeLatest(mainTypes.GET_ANNOUNCES, getAnnounces)
}

function* onGetListOfDisciplines() {
  yield takeLatest(mainTypes.GET_LIST_OF_DISCIPLINES, getListOfDisciplines)
}

export default function* mainSagas() {
  yield all([
    call(onGetAnnounces),
    call(onGetListOfDisciplines)
  ])
}
