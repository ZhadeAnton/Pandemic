import React from 'react'

import './shopButton.scss'

interface Props {
  onClick: () => void
}

export default function ShopButton(props: Props) {
  return (
    <button className='shop-button' onClick={props.onClick}>
      <i className="bi bi-plus-lg shop-button__icon"></i>

      <h5 className='shop-button__title'>
        Add to cart
      </h5>
    </button>
  )
}
