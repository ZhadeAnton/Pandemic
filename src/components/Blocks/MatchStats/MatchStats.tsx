import React from 'react'

import './matchStats.scss'

interface Props {
  stats: {
    winner: string,
    duration: number,
    kills: number,
    maps: number,
    rounds: number,
  }
}

function MatchStats(props: Props) {
  return (
    <div className='match-stats row'>
      <div className='match-stats__item col-3'>
        <h6 className='match-stats__item--subtitle'>winner</h6>
        <h3 className='match-stats__item--info'>{props.stats.winner}</h3>
      </div>

      <div className='match-stats__item col-2'>
        <h6 className='match-stats__item--subtitle'>kills</h6>
        <h3 className='match-stats__item--info'>{props.stats.kills}</h3>
      </div>

      <div className='match-stats__item col-2'>
        <h6 className='match-stats__item--subtitle'>maps</h6>
        <h3 className='match-stats__item--info'>{props.stats.maps}</h3>
      </div>

      <div className='match-stats__item col-2'>
        <h6 className='match-stats__item--subtitle'>rounds</h6>
        <h3 className='match-stats__item--info'>{props.stats.rounds}</h3>
      </div>

      <div className='match-stats__item col-3'>
        <h6 className='match-stats__item--subtitle'>duration</h6>
        <h3 className='match-stats__item--info'>{props.stats.duration}&nbsp;mins</h3>
      </div>
    </div>
  )
}

export default MatchStats
