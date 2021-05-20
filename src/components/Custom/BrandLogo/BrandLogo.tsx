import React from 'react'
import { NavLink } from 'react-router-dom'

import brandLogo from '../../../assets/pandemic-logo.png'

function BrandLogo() {
  return (
    <NavLink to='/'><img src={brandLogo} alt="logo" /></NavLink>
  )
}

export default BrandLogo
