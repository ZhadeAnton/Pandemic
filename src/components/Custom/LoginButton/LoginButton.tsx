import React from 'react'
import { NavLink } from 'react-router-dom'

import './loginButton.scss'

export default function LoginButton() {
  return (
    <NavLink
      className='login-button'
      to="/login"
    >
      <div>
        <i className="bi bi-box-arrow-in-right login-button__icon"></i>
        <h5 className='login-button__title'>Sign in</h5>
      </div>
    </NavLink>
  )
}
