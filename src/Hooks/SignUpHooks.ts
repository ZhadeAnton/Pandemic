import { useState } from 'react';

import { authMessage, signUpWithEmail } from '../Redux/User/UserActionCreators';
import { useAppDispatch } from './PreTypedHooks';

export default function useSignUp() {
  const [signUpCredentionals, setUSignUpCredentionals] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const {displayName, email, password, confirmPassword} = signUpCredentionals
  const dispatch = useAppDispatch()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = event.target

    setUSignUpCredentionals({...signUpCredentionals, [name]: value})
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      dispatch(authMessage('Passwords do not match!'))

      return
    }

    dispatch(signUpWithEmail({email, password, displayName}))
    clear()
  }

  const clear = () => {
    setUSignUpCredentionals({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
  }

  const isValid = () => {
    return password === confirmPassword && password.length !== 0 ? true : false
  }

  const isInValid = () => {
    return password !== confirmPassword ? true : false
  }

  return {
    handleChange,
    handleSubmit,
    isValid,
    isInValid,
    displayName,
    email,
    password,
    confirmPassword
  }
}
