import React from 'react'

import './loginPage.scss'
import { useAppDispatch } from '../../Hooks/PreTypedHooks'
import { googleSignInStart } from '../../Redux/User/UserActionCreators'

export default function LoginPage() {
  const dispatch = useAppDispatch()

  return (
    <main>
      <button onClick={() => dispatch(googleSignInStart())}>Login</button>
    </main>
  )
}
