import React from 'react'

import './footerNavList.scss'

interface Props {
  list: Array<string>
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
                <a
                  className='footer-list-navigation__item--link'
                  href='/'
                >
                  {link}
                </a>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}
