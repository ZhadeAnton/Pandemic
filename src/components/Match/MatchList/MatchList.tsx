import React from 'react'

import './matchList.scss'
import { ArrayOfMatches } from '../../../Interfaces/MatchInterfaces'

import Spinner from '../../Custom/Spinner/Spinner'
import MatchItem from '../MatchItem/MatchItem'
import NotFoundMatches from '../../NotFoundMatches/NotFoundMatches'

interface Props {
  currentMatches: ArrayOfMatches,
  isLoading: boolean
}

export default function MatchList(props: Props) {
  return (
    <ul className='match-list'>
      {
        props.isLoading
        ?
          <Spinner />
        :
          props.currentMatches.length !== 0
        ?
          props.currentMatches.map((match, idx: number) => {
            return (
              <li key={idx} >
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

