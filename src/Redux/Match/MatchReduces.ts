import { IMatch, IPlayer, ITeam } from '../../Interfaces/MainInterfaces'
import * as actions from './MatchActionTypes'

export interface MatchState {
  matches: Array<IMatch> | [],
  currentMatch: IMatch | null,
  currentPlayer: IPlayer | null,
  currentTeam: ITeam | null,
  initialLatestMatches: string,
  initialPage: number,
  currentPage: number,
  matchesPerPage: number,
  isLoading: boolean
}

const INITIAL_STATE: MatchState = {
  matches: [],
  currentMatch: null,
  currentPlayer: null,
  currentTeam: null,
  initialLatestMatches: 'CS:GO',
  initialPage: 1,
  currentPage: 1,
  matchesPerPage: 3,
  isLoading: false
}

const matchReducer =
  (state = INITIAL_STATE, action: actions.MatchTypes): MatchState => {
    switch (action.type) {
      case actions.SORT_MATCHES:
        return {
          ...state,
          isLoading: true
        }

      case actions.SORT_MATCHES_SUCCESS:
        return {
          ...state,
          matches: action.payload,
          isLoading: false
        }


      case actions.SET_CURRENT_MATCH:
        return {
          ...state,
          currentMatch: action.payload
        }

      case actions.SET_CURRENT_PLAYER:
        return {
          ...state,
          currentPlayer: action.payload
        }

      case actions.SET_CURRENT_TEAM:
        return {
          ...state,
          currentTeam: action.payload
        }

      default:
        return state
    }
  }

export default matchReducer
