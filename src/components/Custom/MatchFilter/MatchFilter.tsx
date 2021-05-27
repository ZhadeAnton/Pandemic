import React from 'react'
import { MainPageProps } from '../../../Containers/MainContainer'

import './matchFilter.scss'

interface Props {
  disciplines: MainPageProps['disciplines']
}

function MatchFilter(props: Props) {
  return (
    <nav className='match-filter'>
      <ul className='match-filter__list'>
        {
          props.disciplines.map((discipline: string, idx: number) => {
            return (
              <li
                className='match-filter__list--item'
                key={idx}
              >
                {discipline}
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default MatchFilter
