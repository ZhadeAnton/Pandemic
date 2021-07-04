import {takeLatest, all, call, put} from 'redux-saga/effects'

import * as cartTypes from './CartActionTypes'
import * as cartAPI from '../../API/CartAPI'
import { getShopItemsFromCartSucces } from './CartActionCreators'

function* addItemToCart({payload: {userUid, shopItemId}}) {
  try {
    yield cartAPI.addItemToUserCart(userUid, shopItemId)
  } catch (erorr) {
    console.log(error)
  }
}

function* removeItemFromCart({payload: {userUid, shopItemId, quantity}}) {
  try {
    yield cartAPI.removeItemFromUserCart({userUid, shopItemId, quantity})
  } catch (erorr) {
    console.log(error)
  }
}

function* getItemsFromCart({payload: userUid}) {
  try {
    const cartItems = yield cartAPI.getShopItemsFromUserCart(userUid)
    yield put(getShopItemsFromCartSucces(cartItems))
  } catch (erorr) {
    console.log(error)
  }
}

function* clearCart({payload: userUid}) {
  try {
    yield cartAPI.clearUserCart(userUid)
  } catch (erorr) {
    console.log(error)
  }
}

function* onAddItemToCart() {
  yield takeLatest(cartTypes.ADD_ITEM_TO_CART, addItemToCart)
}

function* onRemoveItemFromCart() {
  yield takeLatest(cartTypes.REMOVE_ITEM_FROM_CART, removeItemFromCart)
}

function* onGetShopItemFromCart() {
  yield takeLatest(cartTypes.GET_SHOP_ITEMS_FROM_USER_CART, getItemsFromCart)
}

function* onClearCart() {
  yield takeLatest(cartTypes.CLEAR_CART, clearCart)
}

export default function* cartSagas() {
  yield all([
    call(onAddItemToCart),
    call(onRemoveItemFromCart),
    call(onGetShopItemFromCart),
    call(onClearCart)
  ])
}
