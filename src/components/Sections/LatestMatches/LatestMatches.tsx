import React from 'react'

import './latestMatches.scss'

function LatestMatches() {
  return (
    <section className='latest-matches'>
      <div className='latest-matches__wrapper container'>
        <div className='latest-matches__top-banner'>
          <h2 className='latest-matches__top-banner--title'>
            latest matches
          </h2>
          <h6 className='latest-matches__top-banner--sub-title'>
            handpicked
          </h6>
          <span className='latest-matches__top-banner--line'></span>
        </div>

        <div className='latest-matches__slider'>

        </div>
      </div>
    </section>
  )
}

export default LatestMatches
