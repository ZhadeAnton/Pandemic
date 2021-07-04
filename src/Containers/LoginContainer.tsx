import React, { useEffect } from 'react'
import toast from 'react-hot-toast';

import { useAppDispatch, useAppSelector } from '../Hooks/PreTypedHooks';
import { resetAuthMessage } from '../Redux/User/UserActionCreators';

import LoginPage from '../Routes/LoginPage/LoginPage';

export interface IAuthContainer {
}

export default function LoginContainer() {
  const authMessage = useAppSelector((state) => state.user?.authMessage)

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

  return <LoginPage/>
}
