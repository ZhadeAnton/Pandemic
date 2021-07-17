import {takeLatest, put, all, call} from 'redux-saga/effects'
import * as actionCreators from './ShopActionCreators'
import * as actionTypes from './ShopActionTypes'
import * as generalActions from '../General/GeneralActionCreators'
import * as shopAPI from '../../API/ShopAPI'
import { v4 } from 'uuid'

function* getShopItems() {
  try {
    const shopItems = yield shopAPI.getShopItems()
    yield put(actionCreators.getShopItemsSuccess(shopItems))
  } catch (error) {
    yield put(generalActions.addNotification('ERROR', error.message, v4()))
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
