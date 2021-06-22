import {takeLatest, put, all, call} from 'redux-saga/effects'
import * as actionCreators from './ShopActionCreators'
import * as actionTypes from './ShopActionTypes'
import * as api from '../../API/ShopAPI/ShopAPI'

function* getShopItems() {
  try {
    const shopItems = yield api.getShopItems()
    yield put(actionCreators.getShopItemsSuccess(shopItems))
  } catch (error) {
    console.log(error)
  }
}

function* onGetShopItems() {
  yield takeLatest(actionTypes.GET_SHOP_ITEMS, getShopItems)
}

export default function* shopSagas() {
  yield all([
    call(onGetShopItems)
  ])
}
