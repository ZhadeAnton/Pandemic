import React from 'react'

import './modalButton.scss'

function ModalButton() {
  return (
    <button className='brand-button'>
      <a
        className='brand-button__link'
        href="/"
      >
        <i className="bi bi-gem brand-button__icon"></i>
        check out the demo
      </a>
    </button>
  )
}

export default ModalButton
