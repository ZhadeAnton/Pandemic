import { IMatch } from '../../Interfaces/MatchInterfaces'
import { IPlayer } from '../../Interfaces/PlayerInterfaces'
import { ITeam } from '../../Interfaces/TeamInterfaces'
import * as matchActions from './MatchActionTypes'
import * as generalActions from '../General/GeneralActionTypes'
import { GeneralTypes } from '../General/GeneralActionTypes';

export interface IMatchState {
  matches: Array<IMatch> | [],
  currentMatch: IMatch | null,
  currentPlayer: IPlayer | null,
  currentTeam: ITeam | null,
  initialLatestMatches: string,
  initialPage: number,
  currentPage: number,
  isLoading: boolean
}

type reducerType = matchActions.MatchTypes | GeneralTypes

const INITIAL_STATE: IMatchState = {
  matches: [],
  currentMatch: null,
  currentPlayer: null,
  currentTeam: null,
  initialLatestMatches: 'CS:GO',
  initialPage: 1,
  currentPage: 1,
  isLoading: false
}

const matchReducer =
  (state = INITIAL_STATE, action: reducerType): IMatchState => {
    switch (action.type) {
      case matchActions.SORT_MATCHES:
        return {
          ...state,
          isLoading: true
        }

      case matchActions.SORT_MATCHES_SUCCESS:
        return {
          ...state,
          matches: action.payload,
          isLoading: false
        }

      case matchActions.SET_CURRENT_MATCH:
        return {
          ...state,
          currentMatch: action.payload
        }

      case matchActions.SET_CURRENT_PLAYER:
        return {
          ...state,
          currentPlayer: action.payload
        }

      case matchActions.SET_CURRENT_TEAM:
        return {
          ...state,
          currentTeam: action.payload
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

export default matchReducer
