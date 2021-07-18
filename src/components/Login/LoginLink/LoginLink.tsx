import React from 'react'
import { NavLink } from 'react-router-dom'

import './loginLink.scss'

export default function LoginLink() {
  return (
    <NavLink
      className='login-link'
      to="/login"
    >
      <i className="bi bi-box-arrow-in-right login-link__icon"></i>

      <h5 className='login-link__title'>
        Sign in
      </h5>
    </NavLink>
  )
}
