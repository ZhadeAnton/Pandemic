import useHistoryPush from './HistoryHook';
import { useAppDispatch } from './PreTypedHook';
import { IMatch } from '../Interfaces/MatchInterfaces';
import { ITeam } from '../Interfaces/TeamInterfaces';
import { setCurrentMatch, setCurrentTeam } from '../Redux/Match/MatchActionCreators';

export default function useSelectMatch() {
  const dispatch = useAppDispatch()
  const redirect = useHistoryPush()

  const handleSelectMatch = (e: any, match: IMatch) => {
    if (e.target.tagName !== 'IMG') {
      redirect(`/match/${match.id}`)

      dispatch(setCurrentMatch(match))
    }
  }

  const handleSelectTeam = (team: ITeam) => {
    redirect(`/team/${team.id}`)
    dispatch(setCurrentTeam(team))
  }

  return {
    handleSelectMatch,
    handleSelectTeam
  }
}
