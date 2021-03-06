import { useState } from 'react'
import { sortMatches } from '../Redux/Match/MatchActionCreators'
import { useAppDispatch } from './usePreTypedHook'

export default function useMatchFilter(initialLatestMatches: string) {
  const [active, setActive] = useState(initialLatestMatches)

  const dispatch = useAppDispatch()

  function handleActiveItem(discipline: string) {
    dispatch(sortMatches(discipline))
    setActive(discipline)
  }

  return {
    active, handleActiveItem
  }
}
