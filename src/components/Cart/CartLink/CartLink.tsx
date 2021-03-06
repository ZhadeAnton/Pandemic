import React from 'react'

import './cartLink.scss'
import useHistoryPush from '../../../Hooks/useHistory'

interface Props {
  itemsLength: number | undefined
}

export default function CartLink(props: Props) {
  const redirectToCart = useHistoryPush()

  return (
    <div
      className='cart-link'
      onClick={() => redirectToCart('/cart')}
    >
      <i className="bi bi-cart3 cart-link__icon"></i>

      {
        props.itemsLength !== undefined
        ?
          <div className='cart-link__badge-wrapper'>
            <span className='cart-link__badge-wrapper--count'>
              {props.itemsLength}
            </span>
          </div>
        :
          null
      }
    </div>
  )
}
