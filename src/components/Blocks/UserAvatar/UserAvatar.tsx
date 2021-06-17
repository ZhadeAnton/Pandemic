import React from 'react'

import './userAvatar.scss'

interface Props {
  avatar: string
}

export default function UserAvatar(props: Props) {
  return (
    <div className='user-avatar'>
      <img
        className='user-avatar__image'
        src={props.avatar}
        alt="avatar" />
    </div>
  )
}
