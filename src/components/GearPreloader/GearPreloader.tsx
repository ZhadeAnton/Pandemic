import React from 'react'

import './gearPreloader.scss'
import gearIcon from '../../assets/Preloaders/gear-preloader.gif'

function GearPreloader() {
  return (
    <div className='preloader-gear'>
      <img src={gearIcon} alt="loading" />
    </div>
  )
}

export default GearPreloader
