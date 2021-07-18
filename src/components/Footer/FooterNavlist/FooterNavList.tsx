import React from 'react'
import { NavLink } from 'react-router-dom'

import './footerNavList.scss'

interface Props {
  list: Array<{title: string, link: string}>
}

export default function FooterNavList(props: Props) {
  return (
    <nav className='footer-list-navigation'>
      <ul className='footer-list-navigation__list'>
        {
          props.list.map((link, idx: number) => {
            return (
              <li
                className='footer-list-navigation__item'
                key={idx}
              >
                <NavLink
                  className='footer-list-navigation__item--link'
                  to={`${link.link}`}
                >
                  {link.title}
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}
