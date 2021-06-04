import React from 'react'
import moment from 'moment'
import firebase from 'firebase'

import { IMatch } from '../../../interfaces'
import './matchItem.scss'

interface Props {
  match: IMatch,
}

function MatchItem(props: Props) {
  const indOfSeparator = props.match.score.indexOf(':')
  const leftScore = props.match.score.slice(0, indOfSeparator)
  const rightScore = props.match.score.slice(indOfSeparator + 1)
  const timestamp = firebase.firestore.Timestamp.fromMillis(props.match.date.toDate())

  return (
    <div className='match-item'>
      <div className='match-item__wrapper'>
        <div className='match-item__team'>
          <div className='match-item__image-wrapper transform-element-left'>
            <img
              className='match-item__image-wrapper--image'
              src={props.match.team1.logo}
              alt={props.match.team1.tag}
            />
          </div>

          <div className='match-item__team-info'>
            <h3 className='match-item__team-info--tag'>
              {props.match.team1.tag}
            </h3>

            <small className='match-item__team-info--discipline text-end'>
              {props.match.discipline}
            </small>
          </div>
        </div>

        <div className='match-item__score'>
          <span>{leftScore}</span>
          <span className='match-item__score--separator'>:</span>
          <span>{rightScore}</span>
        </div>

        <div className='match-item__team flex-row-reverse'>
          <div className='match-item__image-wrapper transform-element-right'>
            <img
              className='match-item__image-wrapper--image'
              src={props.match.team2.logo}
              alt={props.match.team2.tag}
            />
          </div>

          <div className='match-item__team-info'>
            <h3 className='match-item__team-info--tag'>
              {props.match.team2.tag}
            </h3>

            <small className='match-item__team-info--discipline text-start'>
              {props.match.discipline}
            </small>
          </div>
        </div>

        <div className='match-item__back'></div>
      </div>

      <div className='match-item__date'>
        {moment(timestamp.toDate()).format('MMM D YYYY, h:mm a')}
      </div>
    </div>
  )
}

export default MatchItem
