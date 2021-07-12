import React from 'react'

import './hamburgerMenu.scss'

interface Props {
  onToggleSidebar: () => void
}

export default function HamburgerMenu(props: Props) {
  return (
    <div
      className='hamburger-menu'
      onClick={props.onToggleSidebar}
    >
      <span className='hamburger-menu__line'></span>
      <span className='hamburger-menu__line'></span>
      <span className='hamburger-menu__line'></span>
    </div>
  )
}
