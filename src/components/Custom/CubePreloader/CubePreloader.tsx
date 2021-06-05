import React from 'react'

import './cubePreloader.scss'
import preloader1 from '../../../Assets/Preloaders/preloader1.gif'

function Preloader() {
  return (
    <div className='preloader-cube'>
      <img src={preloader1} alt="loading" />
    </div>
  )
}

export default Preloader
