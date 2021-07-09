import React from 'react'
import { Form } from 'react-bootstrap'

import './signIn.scss'
import useSignIn from '../../../Hooks/SignInHook'

import LoginButton from '../LoginButton/LoginButton'
import AlternativeSignIn from '../../Blocks/AlternativeSignIn/AlternativeSignIn'

export default function SignIn() {
  const signInHook = useSignIn()

  return (
    <>
      <Form className='sign-in'>
        <Form.Group className='sign-in__group'>
          <Form.Label>Email address</Form.Label>

          <Form.Control
            name="email"
            type="email"
            value={signInHook.email}
            onChange={signInHook.handleChange}
            ref={signInHook.inputRef}
            placeholder="Enter email"
            autoComplete="email"
          />
        </Form.Group>

        <Form.Group
          className='sign-in__group'
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
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
