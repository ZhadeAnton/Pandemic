import { useAppDispatch } from './PreTypedHooks'
import { IPlayer } from '../Interfaces/MainInterfaces'
import { setCurrentPlayer } from '../Redux/Match/MatchActionCreators'
import useHistoryPush from './HistoryHook'

export default function useSelectPlayer() {
  const dispatch = useAppDispatch()
  const historyHook = useHistoryPush()

  const handleSelectPlayer = (player: IPlayer) => {
    historyHook(`/player/${player.id}`)

    dispatch(setCurrentPlayer(player))
  }

  return {
    handleSelectPlayer
  }
}
