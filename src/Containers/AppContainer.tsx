import React from 'react'

import { useAppSelector } from '../Hooks/PreTypedHooks'

import App from '../App'

export interface IAppContainer {
  cartItemsLength: number | undefined
}

export default function AppContainer() {
  const cartItemsLength = useAppSelector((state) => state.user.currentUser?.cart?.length)
  cartItemsLength ? cartItemsLength : 0

  return (
    <App
      cartItemsLength={cartItemsLength}
    />
  )
}
