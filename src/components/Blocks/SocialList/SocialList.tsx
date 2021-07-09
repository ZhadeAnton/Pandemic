import React from 'react'

import './socialList.scss'
import { defaultSocialList } from '../../../Utils/FooterUtils'

interface Props {
  socialList?: Array<string>
}

export default function SocialList(props: Props) {
  const list = props.socialList ? props.socialList : defaultSocialList

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
