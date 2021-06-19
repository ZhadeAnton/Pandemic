import React, { useState, useEffect, useRef } from 'react'
import { Form } from 'react-bootstrap'

import './signIn.scss'
import { useAppDispatch } from '../../../Hooks/PreTypedHooks'
import { signInWithEmail } from '../../../Redux/User/UserActionCreators'

import LoginButton from '../LoginButton/LoginButton'
import AlternativeSignIn from '../../Blocks/AlternativeSignIn/AlternativeSignIn'

export default function SignIn() {
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement | null>(null)

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = userData

  useEffect(() => {
    if (inputRef !== null) {
      inputRef.current?.focus()
    }
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setUserData({...userData, [name]: value})
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    dispatch(signInWithEmail({email, password}))
    clear()
  }

  const clear = () => {
    setUserData({
      email: '',
      password: ''
    })
  }

  return (
    <>
      <Form className='sign-in'>
        <Form.Group
          className='sign-in__group'
          controlId="formBasicEmail"
        >
          <Form.Label>Email address</Form.Label>

          <Form.Control
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            ref={inputRef}
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
            value={password}
            onChange={handleChange}
            autoComplete="current-password"
          />
        </Form.Group>

        <LoginButton
          onClick={handleSubmit}
        >
          Sign In
        </LoginButton>
      </Form>

      <AlternativeSignIn />
    </>
  )
}
