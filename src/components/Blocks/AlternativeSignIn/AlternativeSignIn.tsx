import React from 'react'

import './alternativeSignIn.scss'
import useAlternativeSignInHook from '../../../Hooks/AlternativeSignInHook'

import AlternativeButton from '../../Custom/AlternativeButton/AlternativeButton'

export default function AlternativeSignIn() {
  const alternativeHook = useAlternativeSignInHook()

  return (
    <div className='alternative-sign-in'>
      <h2 className='alternative-sign-in__title'>
        or
      </h2>

      <AlternativeButton
        icon='google'
        onClick={alternativeHook.handleSignInWithGoogle}
      >
        Sign in with Google
      </AlternativeButton>

      <AlternativeButton
        icon='facebook'
        onClick={alternativeHook.handleSignInWithFacebook}
      >
        Sign in with Facebook
      </AlternativeButton>
    </div>
  )
}
