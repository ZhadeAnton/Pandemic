import { IArrayOfPosts, IPost } from '../../Interfaces/PostInterfaces'

export const GET_POSTS = 'GET_POSTS'

export interface GetPosts {
  type: typeof GET_POSTS,
}

export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'

export interface GetPostsSuccess {
  type: typeof GET_POSTS_SUCCESS,
  payload: IArrayOfPosts
}

export const SET_CURRENT_POST = 'SET_CURRENT_POST'
export interface SetCurrentPost {
  type: typeof SET_CURRENT_POST,
  payload: IPost
}

export type PostTypes =
| GetPosts
| GetPostsSuccess
| SetCurrentPost
