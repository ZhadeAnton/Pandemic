import React from 'react'
import cn from 'classnames'

import './alternativeButton.scss'

interface Props {
  children: string,
  icon: 'google' | 'facebook',
  onClick: any
}

export default function AlternativeButton(props: Props) {
  return (
    <button
      className={cn(`alternative-button alternative-button__${props.icon}`)}
      onClick={() => props.onClick()}
    >
      <i className={cn(
          `bi bi-${props.icon}
          alternative-button__icon
          alternative-button__${props.icon}--icon`
      )}></i>

      <h6 className='alternative-button__title'>{props.children}</h6>
    </button>
  )
}
