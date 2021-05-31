import React, { useState } from 'react'

import './matchFilter.scss'
import { IDiscipline } from '../../../interfaces'
import { useAppDispatch, useAppSelector } from '../../../PreTypedHooks'
import { sortMatches } from '../../../Redux/MainPage/MainActionCreators'

export default function MatchFilter() {
  const disciplines = useAppSelector((state) => state.main.disciplines)
  const initialLatestmatches = useAppSelector((state) => state.main.initialLatestmatches)
  const dispatch = useAppDispatch()

  const [active, setActive] = useState(initialLatestmatches)

  function handleActiveItem(discipline: string) {
    dispatch(sortMatches(discipline))
    setActive(discipline)
  }

  return (
    <nav className='match-filter'>
      <ul className='match-filter__list'>
        {
          disciplines.map((discipline: IDiscipline, idx: number) => {
            return (
              <li
                className={active === discipline.name
                  ? 'match-filter__item--active': 'match-filter__item'}
                key={idx}
                onClick={() => handleActiveItem(discipline.name)}
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
