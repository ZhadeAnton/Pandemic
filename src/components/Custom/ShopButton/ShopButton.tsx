import React from 'react'

import './shopButton.scss'

interface Props {
  onClick: () => void
}

export default function ShopButton(props: Props) {
  return (
    <button
      className='shop-button'
      onClick={props.onClick}
    >
      <i
        role='icon'
        className="bi bi-plus-lg shop-button__icon"
      />

      <h5 className='shop-button__title'>
        Add to cart
      </h5>
    </button>
  )
}
