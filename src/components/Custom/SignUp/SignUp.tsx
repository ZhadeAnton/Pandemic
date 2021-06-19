import React, { useState, useRef, useEffect } from 'react'
import { Form } from 'react-bootstrap'

import './signUp.scss'
import { useAppDispatch } from '../../../Hooks/PreTypedHooks'
import { signUpWithEmail } from '../../../Redux/User/UserActionCreators'

import LoginButton from '../LoginButton/LoginButton'

export default function SignUp() {
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement | null>(null)

  const [userData, setUserData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  useEffect(() => {
    if (inputRef !== null) {
      inputRef.current?.focus()
    }
  }, [])

  const {displayName, email, password, confirmPassword} = userData

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = event.target

    setUserData({...userData, [name]: value})
  }

  const handleSubmit =
  async (event: React.FormEvent) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      return
    }

    dispatch(signUpWithEmail({email, password, displayName}))
    clear()
  }

  const clear = () => {
    setUserData({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
  }

  return (
    <Form className='sign-up'>
      <Form.Group className='sign-up__form-group'>
        <Form.Label>
          Your Name
        </Form.Label>
        <Form.Control
          name="displayName"
          placeholder="Name"
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
          isInvalid={password !== confirmPassword ? true : false}
          isValid={password === confirmPassword ? true : false}
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
          onChange={handleChange}
          isInvalid={password !== confirmPassword ? true : false}
          isValid={password === confirmPassword}
          autoComplete="current-password"
        />
      </Form.Group>

      <LoginButton
        onClick={handleSubmit}
      >
        Sign Up
      </LoginButton>
    </Form>
  )
}
