import { IArrayOfPosts } from '../../Interfaces/PostInterfaces';
import { PostTypes } from './PostActionTypes';
import * as actions from './PostActionTypes'

export interface IPostsState {
  posts: IArrayOfPosts | [],
  isLoading: boolean,
  initialPage: number,
  currentPage: number,
  postsPerPage: number
}

const INITIAL_STATE = {
  posts: [] as IArrayOfPosts,
  isLoading: false,
  initialPage: 1,
  currentPage: 1,
  postsPerPage: 3
}

const postsReducer = (state = INITIAL_STATE, action: PostTypes): IPostsState => {
  switch (action.type) {
    case actions.GET_POSTS:
      return {
        ...state,
        isLoading: true
      }

    case actions.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: [...action.payload],
        isLoading: false
      }

    default:
      return state
  }
}

export default postsReducer
