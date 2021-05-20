import React from 'react'
import { Nav } from 'react-bootstrap'
import cn from 'classnames'

import './navigationMenu.scss'

const navigationMenu = [
  {title: 'homepage',
    ul:
    [
      'home esports',
      'home magazine',
      'home white',
      'home shop',
      'home team'
    ]},
  {title: 'pages',
    ul: [
      'about us',
      'sponsors',
      'contact us'
    ]},
  {title: 'matches',
    ul: [
      'match',
      'team',
      'player'
    ]},
  { title: 'blogs' },
  { title: 'shop' },
  { title: 'landing' }
]

interface Props {
  className?: string
  classNameLinks: string,
}

function NavigationMenu(props: Props) {
  return (
    <Nav
      className={cn('navigation-menu d-none d-lg-flex', `${props.className}`)}
      as='ul'
    >
      {
        navigationMenu.map((menuItem, idx) => {
          return (
            <Nav.Item
              className='navigation-menu__item'
              as='li'
              key={idx}
            >
              <Nav.Link
                className={`${props.classNameLinks}`}
                as='a'
                href="/"
              >
                {menuItem.title}

                {
                  menuItem.ul
                  ?
                    <Nav
                      className='navigation-menu-sub-menu'
                      as='ul'
                    >
                      {
                        menuItem.ul.map((subMenuItem, idx) => {
                          return (
                            <Nav.Item
                              className='navigation-menu-sub-menu__item'
                              as='li'
                              key={idx}
                            >
                              <Nav.Link
                                className={`${props.classNameLinks}`}
                                as='a'
                              >
                                {subMenuItem}
                              </Nav.Link>
                            </Nav.Item>
                          )
                        })
                      }
                    </Nav>
                  :
                    null
                }
              </Nav.Link>
            </Nav.Item>
          )
        })
      }
    </Nav>
  )
}

export default NavigationMenu
