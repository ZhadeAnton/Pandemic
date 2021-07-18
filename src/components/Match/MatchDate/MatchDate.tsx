import React from 'react'

import './matchDate.scss'
import { IMatch } from '../../../Interfaces/MatchInterfaces'

import ConvertDate from '../../Custom/ConvertDate/ConvertDate'

interface Props {
  date: IMatch['date']
}

export default function MatchDate(props: Props) {
  return (
    <aside className='match__date'>
      <ConvertDate date={props.date}/>
    </aside>
  )
}
