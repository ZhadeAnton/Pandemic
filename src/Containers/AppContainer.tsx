import React from 'react'

import { useAppSelector } from '../Hooks/PreTypedHook'

import App from '../Components/Sections/App/App'
import { IUserState } from '../Redux/User/UserReducer'

export interface IAppContainer {
  cartItemsLength: number | undefined
  currentUser: IUserState['currentUser']
}

export default function AppContainer() {
  const currentUser = useAppSelector((state) => state.user?.currentUser)
  const cartItemsLength = useAppSelector((state) => state.user.currentUser?.cart?.length)
  cartItemsLength ? cartItemsLength : 0

  return (
    <App
      cartItemsLength={cartItemsLength}
      currentUser={currentUser}
    />
  )
}
