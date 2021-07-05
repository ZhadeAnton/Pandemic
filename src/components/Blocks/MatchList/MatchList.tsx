import React from 'react'

import { useAppSelector } from '../../../Hooks/PreTypedHooks'
import { ArrayOfMatches } from '../../../Interfaces/MatchInterfaces'

import Spinner from '../../Custom/Spinner/Spinner'
import MatchItem from '../MatchItem/MatchItem'
import NotFoundMatches from '../NotFoundMatches/NotFoundMatches'

interface Props {
  currentMatches: ArrayOfMatches
}

export default function MatchList(props: Props) {
  const isLoading = useAppSelector((state) => state.match.isLoading)

  return (
    <ul className='match-list'>
      {
        isLoading
        ?
          <Spinner />
        :
          props.currentMatches.length !== 0
        ?
          props.currentMatches.map((match, idx: number) => {
            return (
              <li
                key={idx}
              >
                <MatchItem
                  match={match}
                />
              </li>
            )
          })
        :
          <NotFoundMatches />
      }
    </ul>
  )
}

