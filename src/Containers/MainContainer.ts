import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import * as actions from '../Redux/MainPage/MainActionCreators'
import { Maintypes } from '../Redux/MainPage/MainActionsTypes'
import { MainState } from '../Redux/MainPage/MainReducer'
import { RootState } from '../Redux/Store/Store'
import MainPage from '../Routes/MainPage/MainPage'
interface StateProps {
  announces: MainState['announces'],
  matches: MainState['matches']
}
interface DispatchProps {
  getAnnounces: () => void,
  getLatestMatches: () => void,
}

const mapStateToProps = (state: RootState) => ({
  announces: state.main.announces,
  matches: state.main.matches
})

const mapDispatchToProps = (dispatch: Dispatch<Maintypes>) => ({
  getAnnounces: () => dispatch(actions.getAnnounces()),
  getLatestMatches: () => dispatch(actions.getLatestMatches()),
})

const MainPageContainer =
connect<StateProps, DispatchProps, {}, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(MainPage)

export type MainPageProps = StateProps & DispatchProps
export default MainPageContainer
