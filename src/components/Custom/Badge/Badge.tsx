import React from 'react'

import './badge.scss'

interface Props {
  children: string
}

export default function Badge(props: Props) {
  return (
    <div className='badge'>
      <h6 className='badge--title'>
        {props.children}
      </h6>
    </div>
  )
}
