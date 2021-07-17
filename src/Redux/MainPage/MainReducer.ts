import * as mainActions from './MainActionsTypes'
import { ArrayOfIDisciplines } from '../../Interfaces/MainInterfaces';
import { ArrayOfAnnounces } from '../../Interfaces/AnnounceInterfaces';

export interface MainState {
  announces: ArrayOfAnnounces | [],
  disciplines: ArrayOfIDisciplines | []
}

const INITIAL_STATE: MainState = {
  announces: [],
  disciplines: [],
}

const mainReducer =
  (state = INITIAL_STATE, action: mainActions.MatchTypes): MainState => {
    switch (action.type) {
      case mainActions.GET_ANNOUNCES_SUCCESS:
        return {
          ...state,
          announces: [...action.payload]
        }

      case mainActions.GET_LIST_OF_DISCIPLINES_SUCCESS:
        return {
          ...state,
          disciplines: [...action.payload]
        }

      default:
        return state
    }
  }

export default mainReducer
