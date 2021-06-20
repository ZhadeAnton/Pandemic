import { useState } from 'react';
import { signInWithEmail } from '../Redux/User/UserActionCreators';

import { useAppDispatch } from './PreTypedHooks';

export default function useSignIn() {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const dispatch = useAppDispatch()
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

  return {
    handleChange, handleSubmit, email, password
  }
}
