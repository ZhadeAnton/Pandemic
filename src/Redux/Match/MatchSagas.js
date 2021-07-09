import {takeLatest, put, all, call} from 'redux-saga/effects'
import * as actionCreators from './MatchActionCreators'
import * as actionTypes from './MatchActionTypes'
import * as api from '../../API/MatchAPI'

function* sortMatches({payload}) {
  try {
    const sortedMatches = yield api.getMatchesByDiscipline(payload)
    yield put(actionCreators.sortMatchesSuccess(sortedMatches))
  } catch (error) {
    console.log(error)
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
