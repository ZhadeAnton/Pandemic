import React from 'react'

import './spinner.scss'

function Spinner() {
  return (
    <div className='spinner'>
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Spinner
