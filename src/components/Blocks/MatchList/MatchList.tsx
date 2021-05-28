import React from 'react'
import { MainPageProps } from '../../../Containers/MainContainer'
import { IMatch } from '../../../interfaces'
import Spinner from '../../Custom/Spinner/Spinner'
import MatchItem from '../MatchItem/MatchItem'
import NotFoundMatches from '../NotFoundMatches/NotFoundMatches'

interface Props {
  isLoading: MainPageProps['isLoading'],
  currentMatches: Array<IMatch>
}

function MatchList(props: Props) {
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
              <li key={idx} >
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
