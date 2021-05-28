import React from 'react'
const Slide = require('react-reveal/Slide')

import './heading.scss'

function Heading() {
  return (
    <Slide top>
      <div className='brand-heading'>
        <h2 className='brand-heading--title'>
        latest matches
        </h2>
        <h6 className='brand-heading--sub-title'>
          handpicked
        </h6>
        <span className='brand-heading--line'></span>
      </div>
    </Slide>
  )
}

export default Heading

