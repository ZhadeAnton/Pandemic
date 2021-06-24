import React from 'react'

import './header.scss'
import BrandLogo from '../../Custom/BrandLogo/BrandLogo'
import HamburgerMenu from '../../Custom/HamburgerMenu/HamburgerMenu'
import NavigationMenu from '../../Blocks/NavigationMenu/NavigationMenu'
import UserProfile from '../../Blocks/UserProfile/UserProfile'
import CartLink from '../../Custom/CartLink/CartLink'
import { useAppSelector } from '../../../Hooks/PreTypedHooks'

function Header() {
  const cartItemsLength = useAppSelector((state) => state.user.currentUser?.cart.length)

  return (
    <header className='header sticky-top'>
      <div className='header__wrapper'>
        <BrandLogo />

        <NavigationMenu
          className='header__navigation'
          classNameLinks='header__link'
        />

        <div className='header__aside'>
          <CartLink itemsLength={cartItemsLength}/>

          <UserProfile />

          <HamburgerMenu className='header__aside--hamburger-menu' />
        </div>
      </div>
    </header>
  )
}

export default Header
