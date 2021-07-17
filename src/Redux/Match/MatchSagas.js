import {takeLatest, put, all, call} from 'redux-saga/effects'
import * as actionCreators from './MatchActionCreators'
import * as actionTypes from './MatchActionTypes'
import * as generalActions from '../General/GeneralActionCreators'
import * as API from '../../API/MatchAPI'
import { v4 } from 'uuid'

function* sortMatches({payload}) {
  try {
    const sortedMatches = yield API.getMatchesByDiscipline(payload)
    yield put(actionCreators.sortMatchesSuccess(sortedMatches))
  } catch (error) {
    yield put(generalActions.addNotification('ERROR', error.message, v4()))
  }
}

function* onSortMatchesByDiscipline() {
  yield takeLatest(actionTypes.SORT_MATCHES, sortMatches)
}

export default function* matchSagas() {
  yield all([
    call(onSortMatchesByDiscipline)
  ])
}
