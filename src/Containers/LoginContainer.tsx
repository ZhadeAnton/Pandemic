import React from 'react'

import { useAppSelector } from '../Hooks/PreTypedHook';

import LoginPage from '../Routes/LoginPage/LoginPage';

export interface IAuthContainer {
  isLoading: boolean
}

export default function AuthContainer() {
  const isLoading = useAppSelector((state) => state.user?.isLoading)

  return <LoginPage isLoading={isLoading}/>
}
