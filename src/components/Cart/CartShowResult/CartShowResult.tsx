import React from 'react'

import './cartShowResult.scss'

interface Props {
  itemsLength: number
}

export default function CartShowResult(props: Props) {
  return (
    <div className='cart-result'>
      <h4 className='cart-result__title'>
        Showing all

        <output className='cart-result__title-output'>
          {props.itemsLength}
        </output>

        results
      </h4>
    </div>
  )
}
