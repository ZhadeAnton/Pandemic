import { useState } from 'react';

import { authenticationError, signUpWithEmail } from '../Redux/User/UserActionCreators';
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
      dispatch(authenticationError('Passwords do not match!'))

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

  return {
    handleChange, handleSubmit, displayName, email, password, confirmPassword
  }
}
