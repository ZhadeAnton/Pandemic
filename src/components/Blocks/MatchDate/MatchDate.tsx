import React from 'react'
import moment from 'moment'

import './matchDate.scss'
import { IMatch } from '../../../Interfaces/MainInterfaces'

interface Props {
  date: IMatch['date']
}

export default function MatchDate(props: Props) {
  const timestamp = new Date(props.date.seconds * 1000)

  return (
    <aside className='match__date'>
      {moment(timestamp).format('MMM D YYYY, h:mm a')}
    </aside>
  )
}
