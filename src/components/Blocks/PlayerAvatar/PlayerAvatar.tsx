import React from 'react'

import './playerAvatar.scss'

interface Props {
  photo: string
}

export default function PlayerAvatar(props: Props) {
  return (
    <div className='player-brand-avatar'>
      <img
        className='player-brand-avatar__image'
        src={props.photo}
        alt='player avatar'
      />
    </div>
  )
}
