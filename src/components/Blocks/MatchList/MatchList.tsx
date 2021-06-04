import React from 'react'
import { useHistory } from 'react-router';

import { IMatch } from '../../../interfaces'
import { useAppDispatch, useAppSelector } from '../../../PreTypedHooks'
import { setCurrentMatch } from '../../../Redux/MainPage/MainActionCreators';

import Spinner from '../../Custom/Spinner/Spinner'
import MatchItem from '../MatchItem/MatchItem'
import NotFoundMatches from '../NotFoundMatches/NotFoundMatches'

interface Props {
  currentMatches: Array<IMatch>
  matchesPerPage: number,
  currentPage: number,
}

export default function MatchList(props: Props) {
  const history = useHistory()
  const isLoading = useAppSelector((state) => state.main.isLoading)
  const dispatch = useAppDispatch()

  const handleSelectMatch = (match: IMatch) => {
    history.push({
      pathname: `/match/${match.id}`
    });

    dispatch(setCurrentMatch(match))
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

