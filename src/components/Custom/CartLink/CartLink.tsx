import React from 'react'

import './cartLink.scss'
import useHistoryPush from '../../../Hooks/HistoryHook'

interface Props {
  itemsLength: number | undefined
}

export default function CartLink(props: Props) {
  const historyHook = useHistoryPush()

  return (
    <div
      className='cart-link'
      onClick={() => historyHook('/cart')}
    >
      <i className="bi bi-cart3 cart-link__icon"></i>

      {
        props.itemsLength !== 0
        ?
          <span className='cart-link__badge'>
            {props.itemsLength}
          </span>
        :
          null
      }
    </div>
  )
}
