import { useHistory } from 'react-router-dom'
import { useAppDispatch } from './PreTypedHooks'
import { IPlayer } from '../Interfaces/MainInterfaces'
import { setCurrentPlayer } from '../Redux/Match/MatchActionCreators'

export default function useSelectPlayer() {
  const dispatch = useAppDispatch()
  const history = useHistory()

  const handleSelectPlayer = (player: IPlayer) => {
    history.push({
      pathname: `/player/${player.id}`
    });

    dispatch(setCurrentPlayer(player))
  }

  return {
    handleSelectPlayer
  }
}
