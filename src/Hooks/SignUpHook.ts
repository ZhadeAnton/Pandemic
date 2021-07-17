import { useEffect, useRef, useState } from 'react';

import { authMessage, signUpWithEmail } from '../Redux/User/UserActionCreators';
import { useAppDispatch } from './PreTypedHook';

export default function useSignUp() {
  const [signUpCredentionals, setUSignUpCredentionals] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const inputRef = useRef<HTMLInputElement | null>(null)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (inputRef !== null) {
      inputRef.current?.focus()
    }
  }, [inputRef])

  const {displayName, email, password, confirmPassword} = signUpCredentionals

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

    if (displayName.length || email.length || password.length < 4) {
      dispatch(authMessage('Text is too short. It have to be more than 4 symbols'))

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

  const isEmailInputValid = () => {
    return email.includes('@') ? true : false
  }

  const isNameInputvalid = () => {
    return displayName.length > 4 ? true : false
  }

  return {
    handleChange,
    handleSubmit,
    isValid,
    isInValid,
    isEmailInputValid,
    isNameInputvalid,
    displayName,
    email,
    password,
    confirmPassword,
    inputRef
  }
}
