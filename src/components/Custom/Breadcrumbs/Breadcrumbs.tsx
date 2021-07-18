import React from 'react'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

import './breadcrumbs.scss'

interface Props {
  crumbs: Array<string>
}

export default function Breadcrumbs(props: Props) {
  return (
    <nav className='breadcrumbs'>
      <ul className='breadcrumbs__list'>
        {
          props.crumbs.map((item, idx: number) => {
            const breadsLength = props.crumbs.length

            return (
              <li
                data-testid='breadcrumb-item'
                className='breadcrumbs__list--item'
                key={idx}
              >
                <NavLink
                  data-testid='breadcrumb-item-link'
                  className={cn('breadcrumbs__list--link',
                  breadsLength === idx + 1 ? 'breadcrumbs__list--link-active' : '')}
                  to={`${item === 'Home' ? '/' : `/${item.toLocaleLowerCase()}`}`}
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
