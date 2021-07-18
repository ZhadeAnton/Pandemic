import React from 'react'
import { useHistory } from 'react-router-dom'

import './backButton.scss'

export default function BackButton() {
  const history = useHistory()

  return (
    <button
      className='back-button'
      onClick={() => history.goBack()}
    >
      <i className="bi bi-chevron-left back-button__icon" />
      Back
    </button>
  )
}
