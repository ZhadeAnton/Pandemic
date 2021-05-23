import * as actions from './MainActionsTypes'
import { IAnnounce } from '../../interfaces';

export interface MainState {
  announces: Array<IAnnounce> | [],
  matches: any
}

const INITIAL_STATE: MainState = {
  announces: [],
  matches: []
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

      default:
        return state
    }
  }

export default mainReducer
