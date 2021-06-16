import { useHistory } from 'react-router';
import { useAppDispatch } from './PreTypedHooks';
import { IMatch, ITeam } from '../Interfaces/MainInterfaces';
import { setCurrentMatch, setCurrentTeam } from '../Redux/Match/MatchActionCreators';

export default function useSelectMatch() {
  const dispatch = useAppDispatch()
  const history = useHistory()

  const handleSelectMatch = (e: any, match: IMatch) => {
    if (e.target.tagName !== 'IMG') {
      history.push({
        pathname: `/match/${match.id}`
      })

      dispatch(setCurrentMatch(match))
    }
  }

  const handleSelectTeam = (team: ITeam) => {
    history.push({
      pathname: `/team/${team.id}`
    })

    dispatch(setCurrentTeam(team))
  }

  return {
    handleSelectMatch,
    handleSelectTeam
  }
}
