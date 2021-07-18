import React from 'react'
import { Form } from 'react-bootstrap'

import './signIn.scss'
import useSignIn from '../../../Hooks/useSignIn'

import LoginButton from '../LoginButton/LoginButton'
import AlternativeSignIn from '../AlternativeSignIn/AlternativeSignIn'

export default function SignIn() {
  const signInHook = useSignIn()

  return (
    <>
      <Form
        data-testid='sign-in-form'
        className='sign-in'
      >
        <Form.Group className='sign-in__group'>
          <Form.Label>Email address</Form.Label>

          <Form.Control
            data-testid='sign-in-input'
            name="email"
            type="email"
            value={signInHook.email}
            onChange={signInHook.handleChange}
            ref={signInHook.inputRef}
            placeholder="Enter email"
            autoComplete="email"
            required
          />
        </Form.Group>

        <Form.Group
          className='sign-in__group'
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            data-testid='sign-in-input'
            name="password"
            type="password"
            placeholder="Password"
            value={signInHook.password}
            onChange={signInHook.handleChange}
            autoComplete="current-password"
          />
        </Form.Group>

        <LoginButton
          onClick={signInHook.handleSubmit}
        >
          Sign In
        </LoginButton>
      </Form>

      <AlternativeSignIn />
    </>
  )
}
