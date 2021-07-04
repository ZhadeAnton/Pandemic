import {takeLatest, put, all, call} from 'redux-saga/effects'
import * as actionCreators from './MainActionCreators'
import * as actionTypes from './MainActionsTypes'
import * as api from '../../API/MatchAPI'

function* getAnnounces() {
  try {
    const announces = yield api.fetchAnnounces()
    yield put(actionCreators.getAnnouncesSuccess(announces))
  } catch (error) {
    console.log(error)
  }
}

function* getListOfDisciplines() {
  try {
    const listOfDisciplines = yield api.fetchListOfDiscipines()
    yield put(actionCreators.getListOfDisciplinesSuccess(listOfDisciplines))
  } catch (error) {
    console.log(error)
  }
}

function* onGetAnnounces() {
  yield takeLatest(actionTypes.GET_ANNOUNCES, getAnnounces)
}

function* onGetListOfDisciplines() {
  yield takeLatest(actionTypes.GET_LIST_OF_DISCIPLINES, getListOfDisciplines)
}

export default function* mainSagas() {
  yield all([
    call(onGetAnnounces),
    call(onGetListOfDisciplines)
  ])
}
