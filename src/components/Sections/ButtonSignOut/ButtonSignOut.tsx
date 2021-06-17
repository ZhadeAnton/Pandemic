import React from 'react'

import './buttonSignOut.scss'

interface Props {
  onClick?: any
}

export default function ButtonSignOut(props: Props) {
  return (
    <button
      className='button-sign-out'
      onClick={props.onClick}
    >
      Sign out
    </button>
  )
}
