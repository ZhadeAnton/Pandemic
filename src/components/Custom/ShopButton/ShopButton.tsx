import React from 'react'

import './shopButton.scss'

export default function ShopButton() {
  return (
    <button className='shop-button'>
      <i className="bi bi-cart3 shop-button__icon" />

      <h6 className='shop-button__title'>
        Add to cart
      </h6>
    </button>
  )
}
