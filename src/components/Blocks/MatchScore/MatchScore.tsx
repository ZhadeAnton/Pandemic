import React from 'react'

import './matchScore.scss'

interface Props {
  score: string
}

export default function MatchScore(props: Props) {
  const indOfSeparator = props.score.indexOf(':')
  const leftNumberOfScore = props.score.slice(0, indOfSeparator)
  const rightNumberOfScore = props.score.slice(indOfSeparator + 1)

  return (
    <div className='match-score'>
      <span>
        {leftNumberOfScore}
      </span>

      <span className='match-score__separator'>
        :
      </span>

      <span>
        {rightNumberOfScore}
      </span>
    </div>
  )
}
