import React from 'react'

import './plainText.scss'

interface Props {
  text: string
}

export default function PlainText(props: Props) {
  return (
    <p className='plain-text'>
      {props.text}
    </p>
  )
}
