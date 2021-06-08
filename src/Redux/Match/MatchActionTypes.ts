import { IMatch, IPlayer, ITeam } from '../../Interfaces/MainInterfaces'

export const SORT_MATCHES = 'SORT_MATCHES'
export interface SortMatches {
  type: typeof SORT_MATCHES,
  payload: string
}

export const SORT_MATCHES_SUCCESS = 'SORT_MATCHES_SUCCESS'
export interface SortMatchesSuccess {
  type: typeof SORT_MATCHES_SUCCESS,
  payload: Array<IMatch>
}

export const SET_CURRENT_MATCH = 'SET_CURRENT_MATCH'
export interface SetCurrentMatch {
  type: typeof SET_CURRENT_MATCH,
  payload: IMatch
}

export const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER'
export interface SetCurrentPlayer {
  type: typeof SET_CURRENT_PLAYER,
  payload: IPlayer
}

export const SET_CURRENT_TEAM = 'SET_CURRENT_TEAM'
export interface SetCurrentTeam {
  type: typeof SET_CURRENT_TEAM,
  payload: ITeam
}

export type MatchTypes =
|SortMatches
|SortMatchesSuccess
|SetCurrentMatch
|SetCurrentPlayer
|SetCurrentTeam
