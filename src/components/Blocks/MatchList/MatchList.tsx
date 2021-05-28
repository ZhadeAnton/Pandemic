import React from 'react'

import { IMatch } from '../../../interfaces'
import { MainPageProps } from '../../../Containers/MainContainer'
import Spinner from '../../Custom/Spinner/Spinner'
import MatchItem from '../MatchItem/MatchItem'
import NotFoundMatches from '../NotFoundMatches/NotFoundMatches'

interface Props {
  history: MainPageProps['history']
  isLoading: MainPageProps['isLoading'],
  currentMatches: Array<IMatch>
}

function MatchList(props: Props) {
  const handleSelectMatch = (match: IMatch) => {
    props.history.push({
      pathname: `match/${match.id}`,
      state: match
    });
  };

  return (
    <ul className='match-list'>
      {
        props.isLoading
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

export default MatchList
