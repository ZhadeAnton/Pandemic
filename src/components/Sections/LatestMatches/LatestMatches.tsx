import React from 'react'

import { IMatch } from '../../../interfaces'
import { MainPageProps } from '../../../Containers/MainContainer'
import MatchItem from '../../Blocks/MatchItem/MatchItem'

import './latestMatches.scss'

interface Props {
  matches: MainPageProps['matches']
}

function LatestMatches(props: Props) {
  return (
    <section className='latest-matches'>
      <div className='latest-matches__wrapper container'>
        <div className='latest-matches__top-banner'>
          <h2 className='latest-matches__top-banner--title'>
            latest matches
          </h2>
          <h6 className='latest-matches__top-banner--sub-title'>
            handpicked
          </h6>
          <span className='latest-matches__top-banner--line'></span>
        </div>

        <div className='latest-matches__slider'>
          {
            props.matches.map((match: IMatch, idx: number) => {
              return (
                <MatchItem
                  key={idx}
                  match={match}
                />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default LatestMatches
