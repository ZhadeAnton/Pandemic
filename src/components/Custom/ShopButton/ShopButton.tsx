import React from 'react'

import './shopButton.scss'

interface Props {
  onClick: () => void
}

export default function ShopButton(props: Props) {
  return (
    <button className='shop-button' onClick={props.onClick}>
      <i className="bi bi-cart3 shop-button__icon" />

      <h6 className='shop-button__title'>
        Add to cart
      </h6>
    </button>
  )
}
