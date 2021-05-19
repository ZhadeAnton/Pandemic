import {all, call} from 'redux-saga/effects'
import mainSagas from '../MainPage/MainSagas'

export default function* rootSaga() {
  yield all([
    call(mainSagas)
  ])
}
