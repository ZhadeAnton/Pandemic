import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

import './signIn.scss'
import { useAppDispatch } from '../../../Hooks/PreTypedHooks'
import { signInWithEmail } from '../../../Redux/User/UserActionCreators'
import LoginButton from '../LoginButton/LoginButton'

export default function SignIn() {
  const dispatch = useAppDispatch()

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = userData

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
          placeholder="Enter email"
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
        />
      </Form.Group>

      <LoginButton
        onClick={handleSubmit}
      >
        Sign In
      </LoginButton>
    </Form>
  )
}
