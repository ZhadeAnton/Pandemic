import React from 'react'

import './spinner.scss'

function Spinner() {
  return (
    <div
      data-testid='spinner'
      className='spinner'
    >
      <div
        className="spinner-border text-warning"
        role="status"
      >
      </div>
    </div>
  )
}

export default Spinner
