import { useEffect, useRef, useState } from 'react';

import { useAppDispatch } from './PreTypedHook';
import { signInWithEmail } from '../Redux/User/UserActionCreators';

export default function useSignIn() {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (inputRef !== null) {
      inputRef.current?.focus()
    }
  }, [])

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
    handleChange, handleSubmit, email, password, inputRef
  }
}
