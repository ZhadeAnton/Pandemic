import React from 'react'
import cn from 'classnames'

import './matchItemTeam.scss'

import { ITeam } from '../../../Interfaces/MainInterfaces'

interface Props {
  team: ITeam,
  discipline: string,
  handleSelectTeam: (team: ITeam) => void,
  reverse?: boolean
}

export default function MatchItemTeam(props: Props) {
  return (
    <div className={cn('match-team', props.reverse ? 'flex-row-reverse' : '')}>
      <div
        className={cn('match-team__image-wrapper',
            `transform-element-${props.reverse ? 'right' : 'left'}`)}
      >
        <img
          className='match-team__image-wrapper--image'
          src={props.team.logo}
          alt={props.team.tag}
          onClick={() => props.handleSelectTeam(props.team)}
        />
      </div>

      <div className='match-team__team-info'>
        <h3 className='match-team__team-info--tag'>
          {props.team.tag}
        </h3>

        <small className={cn('match-team__team-info--discipline',
            `${props.reverse ? '' : 'text-end'}`)}>
          {props.discipline}
        </small>
      </div>
    </div>
  )
}
