import { IMatch, IPlayer, ITeam } from '../../Interfaces/MainInterfaces'
import * as types from './MatchActionTypes'

export const sortMatches = (
    discipline: string): types.SortMatches => ({
  type: types.SORT_MATCHES,
  payload: discipline
})

export const sortMatchesSuccess = (
    sortedMatches: Array<IMatch>): types.SortMatchesSuccess => ({
  type: types.SORT_MATCHES_SUCCESS,
  payload: sortedMatches
})

export const setCurrentMatch = (currentMatch: IMatch): types.SetCurrentMatch => ({
  type: types.SET_CURRENT_MATCH,
  payload: currentMatch
})

export const setCurrentPlayer = (player: IPlayer): types.SetCurrentPlayer => ({
  type: types.SET_CURRENT_PLAYER,
  payload: player
})

export const setCurrentTeam = (team: ITeam): types.SetCurrentTeam => ({
  type: types.SET_CURRENT_TEAM,
  payload: team
})
