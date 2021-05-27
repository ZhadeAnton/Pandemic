import React from 'react'

import './gearPreloader.scss'
import preloader1 from '../../../assets/Preloaders/preloader1.gif'

function GearPreloader() {
  return (
    <div className='preloader-gear'>
      <img src={preloader1} alt="loading" />
    </div>
  )
}

export default GearPreloader
