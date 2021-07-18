import React from 'react'

import './teamLine.scss'

interface Props {
  teamLogo: string,
  tag: string
}

function TeamLine(props: Props) {
  return (
    <div className='team-line'>
      <h3 className='team-line__title'>
        {props.tag}
      </h3>

      <div className='team-line__image-wrapper'>
        <img
          className='team-line__image-wrapper--image'
          src={props.teamLogo}
          alt={props.tag}
        />
      </div>
    </div>
  )
}

export default TeamLine
