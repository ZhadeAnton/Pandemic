import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import cn from 'classnames'

import './breadcrumbs.scss'

interface Props {
  crumbs: Array<string>
}

export default function Breadcrumbs(props: Props) {
  const location = useLocation()
  const currentLocation = location.pathname.slice(1)

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
                  to={`${item === 'Home' ? '/' : item}`}
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
