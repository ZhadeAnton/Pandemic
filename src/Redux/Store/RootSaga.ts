import {all, call} from 'redux-saga/effects'
import mainSagas from '../MainPage/MainSagas'
import matchSagas from '../Match/MatchSagas'
import shopSagas from '../Shop/ShopSagas'

export default function* rootSaga() {
  yield all([
    call(mainSagas),
    call(matchSagas),
    call(shopSagas),
  ])
}
