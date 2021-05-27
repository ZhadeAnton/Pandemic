import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import cn from 'classnames'

import './brandButton.scss'

interface Props {
  className: string
}

function BrandButton(props: Props) {
  return (
    <button className={cn('brand-button', props.className)}>
      <a
        className='brand-button__link'
        href="/"
      >
        <FontAwesomeIcon
          className='brand-button__icon'
          icon={faGem}
        />
        check out the demo
      </a>
    </button>
  )
}

export default BrandButton
