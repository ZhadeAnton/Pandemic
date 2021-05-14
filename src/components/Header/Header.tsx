import React from 'react'
import BrandLogo from '../BrandLogo/BrandLogo'
import { Nav } from 'react-bootstrap'

import './header.scss'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'

const headerLinks = [
  { title: 'homepage' },
  { title: 'pages' },
  { title: 'matches' },
  { title: 'blogs' },
  { title: 'shop' },
  { title: 'landing' }
]

function Header() {
  return (
    <header className='header d-flex align-items-center'>
      <div className='header-inner d-flex align-items-center'>
        <BrandLogo />

      <Nav className='header-navigation d-none d-lg-flex col-7'>
        {
          headerLinks.map((link) => {
            return (
              <Nav.Item>
                <Nav.Link href="/" className='text-uppercase'>
                  {link.title}
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