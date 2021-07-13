import React, { useEffect } from 'react'
import toast from 'react-hot-toast';

import { useAppDispatch, useAppSelector } from '../Hooks/PreTypedHook';
import { resetAuthMessage } from '../Redux/User/UserActionCreators';

import LoginPage from '../Routes/LoginPage/LoginPage';

export interface IAuthContainer {
  isLoading: boolean
}

export default function AuthContainer() {
  const authMessage = useAppSelector((state) => state.user?.authMessage)
  const isLoading = useAppSelector((state) => state.user?.isLoading)

  const dispatch = useAppDispatch()

  useEffect(() => {
    return () => {
      dispatch(resetAuthMessage())
    }
  }, [])

  if (authMessage) {
    toast(authMessage.toString(), {
      icon: '✋'
    })
  }

  return <LoginPage isLoading={isLoading}/>
}
