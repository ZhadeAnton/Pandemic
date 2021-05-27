import React from 'react'
import { MainPageProps } from '../../../Containers/MainContainer'
import { IDiscipline } from '../../../interfaces'

import './matchFilter.scss'

interface Props {
  disciplines: MainPageProps['disciplines'],
  sortMatches: MainPageProps['sortMatches']
}

function MatchFilter(props: Props) {
  return (
    <nav className='match-filter'>
      <ul className='match-filter__list'>
        {
          props.disciplines.map((discipline: IDiscipline, idx: number) => {
            return (
              <li
                className='match-filter__item'
                key={idx}
                onClick={() => props.sortMatches(discipline.name)}
              >
                <h3 className='match-filter__item--title'>
                  {discipline.name}
                </h3>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default MatchFilter
