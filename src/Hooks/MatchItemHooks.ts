import { useAppDispatch } from './PreTypedHooks';
import useHistoryPush from './HistoryHook';
import { IMatch, ITeam } from '../Interfaces/MainInterfaces';
import { setCurrentMatch, setCurrentTeam } from '../Redux/Match/MatchActionCreators';

export default function useSelectMatch() {
  const dispatch = useAppDispatch()
  const historyHook = useHistoryPush()

  const handleSelectMatch = (e: any, match: IMatch) => {
    if (e.target.tagName !== 'IMG') {
      historyHook(`/match/${match.id}`)

      dispatch(setCurrentMatch(match))
    }
  }

  const handleSelectTeam = (team: ITeam) => {
    historyHook(`/team/${team.id}`)
    dispatch(setCurrentTeam(team))
  }

  return {
    handleSelectMatch,
    handleSelectTeam
  }
}
