import { IArrayOfPosts } from '../../Interfaces/PostInterfaces';
import * as types from './PostActionTypes';

export const getPosts = (): types.GetPosts => ({
  type: types.GET_POSTS
})

export const getPostsSuccess = (posts: IArrayOfPosts): types.GetPostsSuccess => ({
  type: types.GET_POSTS_SUCCESS,
  payload: posts
})
