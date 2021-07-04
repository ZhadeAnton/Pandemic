import { useAppDispatch } from './PreTypedHooks'
import { IPlayer } from '../Interfaces/MainInterfaces'
import { setCurrentPlayer } from '../Redux/Match/MatchActionCreators'
import useHistoryPush from './HistoryHook'

export default function useSelectPlayer() {
  const dispatch = useAppDispatch()
  const redirectToPlayer = useHistoryPush()

  const handleSelectPlayer = (player: IPlayer) => {
    redirectToPlayer(`/player/${player.id}`)

    dispatch(setCurrentPlayer(player))
  }

  return {
    handleSelectPlayer
  }
}
