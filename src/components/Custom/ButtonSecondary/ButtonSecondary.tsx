import React from 'react'

import './buttonSecondary.scss'

interface Props {
  children: string,
  onClick?: any
}

export default function ButtonSecondary(props: Props) {
  return (
    <button
      className='button-secondary'
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
