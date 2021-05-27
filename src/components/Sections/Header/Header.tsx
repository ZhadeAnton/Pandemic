import React from 'react'

import './header.scss'
import BrandLogo from '../../Custom/BrandLogo/BrandLogo'
import HamburgerMenu from '../../Custom/HamburgerMenu/HamburgerMenu'
import NavigationMenu from '../../Blocks/NavigationMenu/NavigationMenu'

function Header() {
  return (
    <header className='header sticky-top'>
      <div className='header__wrapper'>
        <BrandLogo />

        <NavigationMenu
          className='header__navigation'
          classNameLinks='header__link'
        />

        <HamburgerMenu
          className='header__hamburger-menu'
        />
      </div>
    </header>
  )
}

export default Header
