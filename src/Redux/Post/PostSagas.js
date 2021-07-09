import {takeLatest, put, all, call} from 'redux-saga/effects'
import * as actionTypes from './PostActionTypes'
import * as actions from './PostActionCreators.ts'
import * as API from '../../API/PostAPI'

function* getPosts() {
  try {
    const posts = yield API.getPosts()
    yield put(actions.getPostsSuccess(posts))
  } catch (error) {
    console.log(error)
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
