import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { Maintypes } from '../Redux/MainPage/MainActionsTypes'
import { MainState } from '../Redux/MainPage/MainReducer'
import { RootState } from '../Redux/Store/Store'
import { getAnnounces } from '../Redux/MainPage/MainActionCreators'
import MainPage from '../Routes/MainPage/MainPage'
interface StateProps {
  announces: MainState['announces']
}
interface DispatchProps {
  getAnnounces: () => void
}

const mapStateToProps = (state: RootState) => ({
  announces: state.main.announces
})

const mapDispatchToProps = (dispatch: Dispatch<Maintypes>) => ({
  getAnnounces: () => dispatch(getAnnounces())
})

const MainPageContainer =
connect<StateProps, DispatchProps, {}, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(MainPage)

export type MainPageProps = StateProps & DispatchProps
export default MainPageContainer
