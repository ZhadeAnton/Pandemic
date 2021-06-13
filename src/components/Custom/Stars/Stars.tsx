import React from 'react'

import './stars.scss'

interface Props {
  starsCount: number
}

export default function Stars(props: Props) {
  const stars = []
  for (let i = 0; i < 5; i++) {
    stars.push('stars__item bi bi-star')
  }

  for (let i = 0; i < props.starsCount; i++) {
    stars[i] = 'stars__item--fill bi bi-star-fill'
  }

  return (
    <div className='stars'>
      {
        stars.map((item, idx: number) => (
          <i
            key={idx}
            className={`${item}`}
          />
        ))
      }
    </div>
  )
}
