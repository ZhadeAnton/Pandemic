import React from 'react'

import './matchFilter.scss'
import { ArrayOfIDisciplines, IDiscipline } from '../../../Interfaces/MainInterfaces'
import useMatchFilter from '../../../Hooks/MatchfilterHook'

interface Props {
  disciplines: ArrayOfIDisciplines,
  initialLatestMatches: string
}

export default function MatchFilter(props: Props) {
  const matchFilter = useMatchFilter(props.initialLatestMatches)

  return (
    <nav className='match-filter'>
      <ul className='match-filter__list'>
        {
          props.disciplines.map((discipline: IDiscipline, idx: number) => {
            return (
              <li
                className={matchFilter.active === discipline
                  ? 'match-filter__item--active': 'match-filter__item'}
                key={idx}
                onClick={() => matchFilter.handleActiveItem(discipline)}
              >
                <h3 className='match-filter__item--title'>
                  {discipline}
                </h3>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}
