import React from 'react'
import { Nav } from 'react-bootstrap'

import './header.scss'
import BrandLogo from '../BrandLogo/BrandLogo'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'

const headerMenu = [
  { 
    title: 'homepage',
    ul: ['home esports', 'home magazine', 'home white', 'home shop', 'home team']
  },
  { 
    title: 'pages',
    ul: ['about us', 'sponsors', 'contact us']
  },
  {
    title: 'matches',
    ul: ['match', 'team', 'player']
  },
  { title: 'blogs' },
  { title: 'shop' },
  { title: 'landing' }
]

function Header() {
  return (
    <header className='header d-flex align-items-center'>
      <div className='header-inner d-flex align-items-center'>
        <BrandLogo />

        <Nav as='ul' className='header-navigation d-none d-lg-flex col-7'>
        {
          headerMenu.map((link) => {
            return (
              <Nav.Item as='li'>
                <Nav.Link as='a' href="/">
                  {link.title}

                  {
                    link.ul
                    ?
                    <Nav as='ul' className='header-navigation-sub-menu'>
                      {
                        link.ul.map((item) => {
                          return <Nav.Item as='li' className='lis'>
                            <Nav.Link as='a'>{item}</Nav.Link>
                          </Nav.Item>
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

        <HamburgerMenu className='header-menu'/>
      </div>
    </header>
  )
}

export default Header