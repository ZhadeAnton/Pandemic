import React from 'react'

import './preloader.scss'
import cubePreloader from '../../../Assets/SVG/preloaderCube.svg'
import roundPreloader from '../../../Assets/SVG/preloaderRounds.svg'

interface Props {
  preloader: 'cube' | 'rounds'
}

function Preloader(props: Props) {
  const preloader = props.preloader === 'cube'
  ? cubePreloader
  : roundPreloader

  return (
    <div className='preloader-wrapper'>
      <img
        className='preloader'
        src={preloader}
        alt="loading"
      />
    </div>
  )
}

export default Preloader
