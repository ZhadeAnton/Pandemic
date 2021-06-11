import React from 'react'

import './badge.scss'

interface Props {
  title: string
}

export default function Badge(props: Props) {
  return (
    <div className='badge'>
      <h6 className='badge--title'>
        {props.title}
      </h6>
    </div>
  )
}
