import React from 'react'

import './stars.scss'

interface Props {
  starsCount: number
}

export default function Stars(props: Props) {
  let starsCount = props.starsCount

  if (starsCount > 5) starsCount = 5

  const stars = []

  for (let i = 0; i < 5; i++) {
    stars.push('stars__item bi bi-star')
  }

  for (let i = 0; i < starsCount; i++) {
    stars[i] = 'stars__item--fill bi bi-star-fill'
  }

  return (
    <div className='stars'>
      {
        stars.map((item, idx: number) => (
          <i
            data-testid="star"
            key={idx}
            className={`${item}`}
          />
        ))
      }
    </div>
  )
}
