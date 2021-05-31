import React from 'react'
import { useHistory } from 'react-router';

import { IMatch } from '../../../interfaces'
import Spinner from '../../Custom/Spinner/Spinner'
import MatchItem from '../MatchItem/MatchItem'
import NotFoundMatches from '../NotFoundMatches/NotFoundMatches'
import { useAppSelector } from '../../../PreTypedHooks'

interface Props {
  currentMatches: Array<IMatch>
  matchesPerPage: number,
  currentPage: number,
}

export default function MatchList(props: Props) {
  const history = useHistory()
  const isLoading = useAppSelector((state) => state.main.isLoading)

  const handleSelectMatch = (match: IMatch) => {
    history.push({
      pathname: `match/${match.id}`,
      state: match
    });
  };

  return (
    <ul className='match-list'>
      {
        isLoading
        ?
          <Spinner />
        :
          props.currentMatches.length !== 0
        ?
          props.currentMatches.map((match: IMatch, idx: number) => {
            return (
              <li
                key={idx}
                onClick={() => handleSelectMatch(match)}
              >
                <MatchItem match={match} />
              </li>
            )
          })
        :
          <NotFoundMatches />
      }
    </ul>
  )
}

