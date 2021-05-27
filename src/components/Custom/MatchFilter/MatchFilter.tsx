import React, { useState } from 'react'

import './matchFilter.scss'
import { IDiscipline } from '../../../interfaces'
import { MainPageProps } from '../../../Containers/MainContainer'

interface Props {
  disciplines: MainPageProps['disciplines'],
  sortMatches: MainPageProps['sortMatches']
}

function MatchFilter(props: Props) {
  const [active, setActive] = useState('Overwatch')

  function handleSetActive(discipline: string) {
    props.sortMatches(discipline)
    setActive(discipline)
  }

  return (
    <nav className='match-filter'>
      <ul className='match-filter__list'>
        {
          props.disciplines.map((discipline: IDiscipline, idx: number) => {
            return (
              <li
                className={active === discipline.name
                  ? 'match-filter__item--active': 'match-filter__item'}
                key={idx}
                onClick={() => handleSetActive(discipline.name)}
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
