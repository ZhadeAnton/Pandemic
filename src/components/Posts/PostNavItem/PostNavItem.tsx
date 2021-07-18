import React from 'react'

import './postNavItem.scss'

interface Props {
  navItem: string
}

export default function PostNavItem(props: Props) {
  return (
    <li className='post-nav-item'>
      {props.navItem}
    </li>
  )
}
