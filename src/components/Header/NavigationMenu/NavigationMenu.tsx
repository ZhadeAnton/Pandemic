import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

import './navigationMenu.scss'
import { headerNavMenu } from '../../../Utils/HeaderUtils'


function NavigationMenu() {
  return (
    <Nav
      className='navigation-menu d-none d-lg-flex'
      as='ul'
    >
      {
        headerNavMenu.map((menuItem, idx) => {
          return (
            <Nav.Item
              className='navigation-menu__item'
              as='li'
              key={idx}
            >
              <NavLink
                className='header__link'
                to={`${menuItem.link}`}
              >
                {menuItem.title}
              </NavLink>

              {
                menuItem.ul &&
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
                              className='header__link'
                              as='a'
                            >
                              {subMenuItem}
                            </Nav.Link>
                          </Nav.Item>
                        )
                      })
                    }
                  </Nav>
              }
            </Nav.Item>
          )
        })
      }
    </Nav>
  )
}

export default NavigationMenu
