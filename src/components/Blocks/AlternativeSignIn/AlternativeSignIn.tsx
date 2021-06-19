import React from 'react'

import './alternativeSignIn.scss'
import { useAppDispatch } from '../../../Hooks/PreTypedHooks'
import { signInWithGoogle } from '../../../Redux/User/UserActionCreators'
import { signInWithFacebook } from '../../../Redux/User/UserActionCreators'

import AlternativeButton from '../../Custom/AlternativeButton/AlternativeButton'

export default function AlternativeSignIn() {
  const dispacth = useAppDispatch()

  return (
    <div className='alternative-sign-in'>
      <h2 className='alternative-sign-in__title'>or</h2>

      <AlternativeButton
        icon='google'
        onClick={() => dispacth(signInWithGoogle())}
      >
        Sign in with Google
      </AlternativeButton>

      <AlternativeButton
        icon='facebook'
        onClick={() => dispacth(signInWithFacebook())}
      >
        Sign in with Facebook
      </AlternativeButton>
    </div>
  )
}
