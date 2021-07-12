import React from 'react'
import { NavLink } from 'react-router-dom'

import './cartEmpty.scss'

export default function CartEmpty() {
  return (
    <section className='cart-empty container'>
      <div className='cart-empty__top-row'>
        <h2 className='cart-empty__top-row--title'>
          Cart is empty. Add something from the shop
        </h2>
      </div>

      <NavLink
        className='cart-empty__link'
        to='/shop'
      >
        <h2 className='cart-empty__link--title'>
          Go to the Shop
        </h2>

        <i className="bi bi-arrow-right" />
      </NavLink>
    </section>
  )
}
