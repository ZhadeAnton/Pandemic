import React from 'react'

import './cartLink.scss'
import useCartLink from '../../../Hooks/CartLinkHooks'

interface Props {
  itemsLength: number | undefined
}

export default function CartLink(props: Props) {
  const cartHook = useCartLink()

  return (
    <div
      className='cart-link'
      onClick={cartHook}
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
