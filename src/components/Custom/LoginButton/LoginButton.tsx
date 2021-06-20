import React from 'react'

import './loginButton.scss'

interface Props {
  children: string,
  onClick: any
}

export default function LoginButton(props: Props) {
  return (
    <button
      className='login-button'
      type='submit'
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
