import React, { useRef, useEffect } from 'react'
import { Form } from 'react-bootstrap'

import './signUp.scss'
import useSignUp from '../../../Hooks/SignUpHook'

import LoginButton from '../LoginButton/LoginButton'

export default function SignUp() {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const signUpHook = useSignUp()
  const {displayName, email, password, confirmPassword} = signUpHook

  useEffect(() => {
    if (inputRef !== null) {
      inputRef.current?.focus()
    }
  }, [])

  return (
    <Form className='sign-up'>
      <Form.Group className='sign-up__form-group'>
        <Form.Label>
          Your Name
        </Form.Label>
        <Form.Control
          name="displayName"
          placeholder="Name"
          onChange={signUpHook.handleChange}
          value={displayName}
          ref={inputRef}
          autoComplete="name"
        />
      </Form.Group>

      <Form.Group className='sign-up__form-group'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          onChange={signUpHook.handleChange}
          value={email}
          autoComplete="email"
        />
      </Form.Group>

      <Form.Group className='sign-up__form-group'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={signUpHook.handleChange}
          isInvalid={signUpHook.isInValid()}
          isValid={signUpHook.isValid()}
          autoComplete="current-password"
        />
      </Form.Group>

      <Form.Group className='sign-up__form-group'>
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={signUpHook.handleChange}
          isInvalid={signUpHook.isInValid()}
          isValid={signUpHook.isValid()}
          autoComplete="current-password"
        />
      </Form.Group>

      <LoginButton
        onClick={signUpHook.handleSubmit}
      >
        Sign Up
      </LoginButton>
    </Form>
  )
}
