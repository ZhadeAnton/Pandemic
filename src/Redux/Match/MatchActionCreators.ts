import { IMatch, IPlayer, ITeam } from '../../Interfaces/MainInterfaces'
import * as actions from './MatchActionTypes'

export const sortMatches = (
    discipline: string): actions.SortMatches => ({
  type: actions.SORT_MATCHES,
  payload: discipline
})

export const sortMatchesSuccess = (
    sortedMatches: Array<IMatch>): actions.SortMatchesSuccess => ({
  type: actions.SORT_MATCHES_SUCCESS,
  payload: sortedMatches
})

export const setCurrentMatch = (currentMatch: IMatch): actions.SetCurrentMatch => ({
  type: actions.SET_CURRENT_MATCH,
  payload: currentMatch
})

export const setCurrentPlayer = (player: IPlayer): actions.SetCurrentPlayer => ({
  type: actions.SET_CURRENT_PLAYER,
  payload: player
})

export const setCurrentTeam = (team: ITeam): actions.SetCurrentTeam => ({
  type: actions.SET_CURRENT_TEAM,
  payload: team
})
