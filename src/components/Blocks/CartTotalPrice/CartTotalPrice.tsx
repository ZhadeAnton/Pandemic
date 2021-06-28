import React from 'react'

import './cartTotalPrice.scss'

interface Props {
  totalPrice: number
}

export default function CartTotalPrice(props: Props) {
  return (
    <div className='cart-total'>
      <h3 className='cart-total__title'>
        Cart total:
      </h3>

      <output className='cart-total__output'>
        ${props.totalPrice}
      </output>
    </div>
  )
}
