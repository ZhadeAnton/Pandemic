import React from 'react'

import './modalButton.scss'

function ModalButton() {
  return (
    <button className='modal-button'>
      <a
        className='modal-button__link'
        href="/"
      >
        <i className="bi bi-gem modal-button__icon"></i>
        check out the demo
      </a>
    </button>
  )
}

export default ModalButton
