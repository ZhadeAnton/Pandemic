import { useAppDispatch } from './PreTypedHook'
import { setCurrentPlayer } from '../Redux/Match/MatchActionCreators'
import { IPlayer } from '../Interfaces/PlayerInterfaces'
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
