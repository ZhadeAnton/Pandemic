import React from 'react'

import './userAvatar.scss'

interface Props {
  avatar: string | undefined
}

export default function UserAvatar(props: Props) {
  return (
    <div className='user-avatar'>
      {
        props.avatar
        ?
          <img
            className='user-avatar__image'
            src={props.avatar}
            alt="avatar"
          />
        :
          <img
            className='user-avatar__image'
            src='https://i.ibb.co/Bfhrxx7/user-1.png'
            alt="avatar"
          />
      }
    </div>
  )
}
