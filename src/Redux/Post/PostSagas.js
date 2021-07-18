import {takeLatest, put, all, call} from 'redux-saga/effects'
import * as actionTypes from './PostActionTypes'
import * as actions from './PostActionCreators.ts'
import * as generalActions from '../General/GeneralActionCreators'
import * as API from '../../API/PostAPI'
import { v4 } from 'uuid'

function* getPosts() {
  try {
    const posts = yield API.getPosts()
    yield put(actions.getPostsSuccess(posts))
  } catch (error) {
    yield put(generalActions.addNotification('ERROR', error.message, v4()))
  }
}

function* onGetPosts() {
  yield takeLatest(actionTypes.GET_POSTS, getPosts)
}

export default function* postsSagas() {
  yield all([
    call(onGetPosts)
  ])
}
