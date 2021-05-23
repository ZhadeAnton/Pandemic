import React from 'react'
import { IMatch } from '../../../interfaces'

import './matchItem.scss'

interface Props {
  match: IMatch
}

function MatchItem(props: Props) {
  return (
    <div className='match-item'>
      <div className='match-item__wrapper'>
        <div className='match-item__team'>
          <div className='match-item__team--image-wrapper transform-element-left'>
            <img
              className='match-item__team--image'
              src={props.match.team1.logo}
              alt={props.match.team1.tag}
            />
          </div>

          <h3 className='match-item__team--title'>
            {props.match.team1.tag}
          </h3>
        </div>

        <span className='match-item__score'>
          {props.match.score}
        </span>

        <div className='match-item__team match-item-reverse'>
          <div className='match-item__team--image-wrapper transform-element-right'>
            <img
              className='match-item__team--image'
              src={props.match.team2.logo}
              alt={props.match.team2.tag}
            />
          </div>

          <h3 className='match-item__team--title'>
            {props.match.team2.tag}
          </h3>
        </div>

        <div className='match-item__back'></div>
      </div>
    </div>
  )
}

export default MatchItem
