import React from 'react'

import './socialList.scss'

interface Props {
  socialList?: Array<string>
}

const defaultList = [
  'facebook',
  'twitter',
  'youtube',
  'instagram',
  'twitch',
  'discord'
]

export default function SocialList(props: Props) {
  const list = props.socialList ? props.socialList : defaultList

  return (
    <ul className='social-list'>
      {
        list.map((link, idx: number) => {
          return (
            <li
              className='social-list__item'
              key={idx}
            >
              <i className={`bi bi-${link}`}></i>
            </li>
          )
        })
      }
    </ul>
  )
}
