import * as actions from './MainActionsTypes'
import { IAnnounce, IDiscipline } from '../../Interfaces/MainInterfaces';

export interface MainState {
  announces: Array<IAnnounce> | [],
  disciplines: Array<IDiscipline> | [],
  isLoading: boolean
}

const INITIAL_STATE: MainState = {
  announces: [],
  disciplines: [],
  isLoading: false
}

const mainReducer =
  (state = INITIAL_STATE, action: actions.MatchTypes): MainState => {
    switch (action.type) {
      case actions.GET_ANNOUNCES_SUCCESS:
        return {
          ...state,
          announces: [...action.payload]
        }

      case actions.GET_LIST_OF_DISCIPLINES_SUCCESS:
        return {
          ...state,
          disciplines: [...action.payload]
        }

      default:
        return state
    }
  }

export default mainReducer
