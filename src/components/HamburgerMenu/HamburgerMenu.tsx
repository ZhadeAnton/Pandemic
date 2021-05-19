import React from 'react'
import cn from 'classnames'

import './hamburgerMenu.scss'

interface Props {
  className: string
}

const HamburgerMenu: React.FC<Props> = (props) => {
  return (
    <div className={cn('hamburger-menu', props.className)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default HamburgerMenu
