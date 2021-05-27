import * as actions from './MainActionsTypes'
import { IAnnounce, IMatch } from '../../interfaces';

export interface MainState {
  announces: Array<IAnnounce> | [],
  disciplines: Array<string> | [],
  matches: Array<IMatch> | [],
  matchesLength: number | null,
  initialPage: number,
  currentPage: number,
  matchesPerPage: number
}

const INITIAL_STATE: MainState = {
  announces: [],
  disciplines: [],
  matches: [],
  matchesLength: null,
  initialPage: 1,
  currentPage: 1,
  matchesPerPage: 3
}

const mainReducer =
  (state = INITIAL_STATE, action: actions.Maintypes): MainState => {
    switch (action.type) {
      case actions.GET_ANNOUNCES_SUCCESS:
        return {
          ...state,
          announces: [...action.payload]
        }

      case actions.GET_LATEST_MATCHES_SUCCESS:
        return {
          ...state,
          matches: action.payload
        }

      case actions.GET_LIST_OF_DISCIPLINES_SUCCESS:
        return {
          ...state,
          disciplines: action.payload
        }

      case actions.SET_PAGE_NUMBER:
        return {
          ...state,
          currentPage: action.payload
        }

      case actions.SET_NEXT_PAGE:
        return {
          ...state,
          currentPage: state.currentPage + 1
        }

      case actions.SET_PREV_PAGE:
        return {
          ...state,
          currentPage: state.currentPage - 1
        }

      case actions.SET_FIRST_PAGE:
        return {
          ...state,
          currentPage: state.currentPage = state.initialPage
        }

      case actions.SET_LAST_PAGE:
        return {
          ...state,
          currentPage: state.currentPage = action.payload
        }

      default:
        return state
    }
  }

export default mainReducer
