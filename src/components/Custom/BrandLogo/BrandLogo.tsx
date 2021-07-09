import React from 'react'
import { NavLink } from 'react-router-dom'

import './brandLogo.scss'

import brandLogo from '../../../Assets/PNG/pandemic-logo.png'

function BrandLogo() {
  return (
    <NavLink
      className='brand-logo'
      to='/'
    >
      <img
        className='brand-logo__image'
        src={brandLogo}
        alt="pandemic"
      />
    </NavLink>
  )
}

export default BrandLogo
