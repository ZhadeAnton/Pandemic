import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import * as actions from '../Redux/MainPage/MainActionCreators'
import { Maintypes } from '../Redux/MainPage/MainActionsTypes'
import { MainState } from '../Redux/MainPage/MainReducer'
import { RootState } from '../Redux/Store/Store'
import MainPage from '../Routes/MainPage/MainPage'
import { RouteComponentProps } from 'react-router-dom'

type OwnProps = RouteComponentProps

interface StateProps {
  announces: MainState['announces'],
  disciplines: MainState['disciplines'],
  matches: MainState['matches'],
  currentPage: MainState['currentPage'],
  matchesPerPage: MainState['matchesPerPage'],
  isLoading: MainState['isLoading']
}
interface DispatchProps {
  getAnnounces: () => void,
  getListOfDisciplines: () => void,
  setPageNumber: (pageNumber: number) => void,
  setLastPage: (lastPageNumber: number) => void,
  setNextPage: () => void,
  setPrevPage: () => void,
  setFirstPage: () => void,
  sortMatches: (discipline: string) => void
}

const mapStateToProps = (state: RootState) => ({
  announces: state.main.announces,
  disciplines: state.main.disciplines,
  matches: state.main.matches,
  currentPage: state.main.currentPage,
  matchesPerPage: state.main.matchesPerPage,
  isLoading: state.main.isLoading
})

const mapDispatchToProps = (dispatch: Dispatch<Maintypes>) => ({
  getAnnounces: () => dispatch(actions.getAnnounces()),
  getListOfDisciplines: () => dispatch(actions.getListOfDisciplines()),
  setPageNumber: (pageNumber: number) => dispatch(actions.setPageNumber(pageNumber)),
  setNextPage: () => dispatch(actions.setNextPage()),
  setPrevPage: () => dispatch(actions.setPrevPage()),
  setFirstPage: () => dispatch(actions.setPrevPage()),
  setLastPage: (lastPageNumber: number) => dispatch(actions.setLastPage(lastPageNumber)),
  sortMatches: (discipline: string) =>
    dispatch(actions.sortMatches(discipline))
})

const MainPageContainer =
connect<StateProps, DispatchProps, {}, RootState>(
    mapStateToProps,
    mapDispatchToProps
)(MainPage)

export type MainPageProps = StateProps & DispatchProps & OwnProps
export default MainPageContainer
