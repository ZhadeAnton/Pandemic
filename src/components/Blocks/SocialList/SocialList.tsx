import React from 'react'

import './socialList.scss'

interface Props {
  socialList: Array<string>
}

export default function SocialList(props: Props) {
  return (
    <ul className='social-list'>
      {
        props.socialList.map((link, idx: number) => {
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
