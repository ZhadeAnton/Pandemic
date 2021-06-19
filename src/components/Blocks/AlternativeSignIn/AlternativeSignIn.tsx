import React from 'react'

import './alternativeSignIn.scss'

import AlternativeButton from '../../Custom/AlternativeButton/AlternativeButton'

export default function AlternativeSignIn() {
  return (
    <div className='alternative-sign-in'>
      <h2>or</h2>

      <AlternativeButton icon='google'>
        Sign in with Google
      </AlternativeButton>

      <AlternativeButton icon='facebook'>
        Sign in with Facebook
      </AlternativeButton>
    </div>
  )
}
