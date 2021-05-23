import {takeLatest, put, all, call} from 'redux-saga/effects'
import * as actionCreators from './MainActionCreators'
import * as actionTypes from './MainActionsTypes'
import * as api from '../../api'

function* getAnnounces() {
  try {
    const announces = yield api.fetchAnnounces()
    yield put(actionCreators.getAnnouncesSuccess(announces))
  } catch (error) {
    console.log(error)
  }
}

function* getLatestMatches() {
  try {
    const matches = yield api.fetchLatestMatches()
    yield put(actionCreators.getLatestMatchesSuccess(matches))
  } catch (error) {
    console.log(error)
  }
}

function* onGetAnnounces() {
  yield takeLatest(actionTypes.GET_ANNOUNCES, getAnnounces)
}

function* onGetLatestMatches() {
  yield takeLatest(actionTypes.GET_LATEST_MATCHES, getLatestMatches)
}

export default function* mainSagas() {
  yield all([
    call(onGetAnnounces),
    call(onGetLatestMatches),
  ])
}
