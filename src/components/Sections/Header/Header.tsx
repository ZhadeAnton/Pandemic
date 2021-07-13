import React from 'react'

import './header.scss'
import { IUserState } from '../../../Redux/User/UserReducer'

import BrandLogo from '../../Custom/BrandLogo/BrandLogo'
import NavigationMenu from '../../Blocks/NavigationMenu/NavigationMenu'
import UserProfile from '../../Blocks/UserProfile/UserProfile'
import CartLink from '../../Custom/CartLink/CartLink'

interface Props {
  cartItemsLength: number | undefined,
  currentUser: IUserState['currentUser'],
  onToggleSidebar: () => void
}

function Header(props: Props) {
  return (
    <header className='header sticky-top'>
      <div className='header__wrapper'>
        <BrandLogo />

        <div className='header__content'>
          <div className='header__navigation'>
            <NavigationMenu />
          </div>

          <div className='header__aside'>
            <div className='header__aside--cart-link'>
              <CartLink itemsLength={props.cartItemsLength}/>
            </div>

            <UserProfile currentUser={props.currentUser}/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
