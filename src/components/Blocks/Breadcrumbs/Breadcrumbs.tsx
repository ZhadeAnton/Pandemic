import React from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import './breadcrumbs.scss'
import useCurrentLocation from '../../../Hooks/CurrentLocationHook'

interface Props {
  crumbs: Array<string>
}

export default function Breadcrumbs(props: Props) {
  const currentLocation = useCurrentLocation()

  return (
    <nav className='breadcrumbs'>
      <ul className='breadcrumbs__list'>
        {
          props.crumbs.map((item, idx: number) => {
            const crumb = item.toLocaleLowerCase()

            return (
              <li
                className='breadcrumbs__list--item'
                key={idx}
              >
                <NavLink
                  className={cn('breadcrumbs__list--link',
                    currentLocation === crumb ? 'breadcrumbs__list--link-active' : '')}
                  to={`${item === 'Home' ? '/' : item.toLocaleLowerCase()}`}
                >
                  {item}
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}
