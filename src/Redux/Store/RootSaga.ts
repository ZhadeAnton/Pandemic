import {all, call} from 'redux-saga/effects'
import mainSagas from '../MainPage/MainSagas'
import matchSagas from '../Match/MatchSagas'
import shopSagas from '../Shop/ShopSagas'
import userSagas from '../User/UserSagas'
import cartSagas from '../Cart/CartSagas'
import postsSagas from '../Post/PostSagas'

export default function* rootSaga() {
  yield all([
    call(mainSagas),
    call(matchSagas),
    call(shopSagas),
    call(userSagas),
    call(cartSagas),
    call(postsSagas),
  ])
}
