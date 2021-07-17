import { IArrayOfPosts, IPost } from '../../Interfaces/PostInterfaces';
import { PostTypes } from './PostActionTypes';
import { GeneralTypes } from '../General/GeneralActionTypes';
import * as postActions from './PostActionTypes'
import * as generalActions from '../General/GeneralActionTypes'

export interface IPostsState {
  posts: IArrayOfPosts | [],
  currentPost: IPost | null,
  isLoading: boolean,
  initialPage: number,
  currentPage: number,
  postsPerPage: number
}

const INITIAL_STATE: IPostsState = {
  posts: [],
  currentPost: null,
  isLoading: false,
  initialPage: 1,
  currentPage: 1,
  postsPerPage: 3
}

type reduserType = PostTypes | GeneralTypes

const postsReducer = (state = INITIAL_STATE, action: reduserType): IPostsState => {
  switch (action.type) {
    case postActions.GET_POSTS:
      return {
        ...state,
        isLoading: true
      }

    case postActions.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: [...action.payload],
        isLoading: false
      }

    case postActions.SET_CURRENT_POST:
      return {
        ...state,
        currentPost: action.payload
      }

    case generalActions.SET_PAGE_NUMBER:
      return {
        ...state,
        currentPage: action.payload,
      }

    case generalActions.SET_NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      }

    case generalActions.SET_PREV_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      }

    case generalActions.SET_FIRST_PAGE:
      return {
        ...state,
        currentPage: 1,
      }

    case generalActions.SET_LAST_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      }

    default:
      return state
  }
}

export default postsReducer
