import React from 'react'

import Header from '../../components/Sections/Header/Header'

import './matchInfo.scss'

interface Props {
  [x: string]: any;
}

function MatchInfo(props: Props) {
  const { discipline } =
    (props.location && props.location.state) || {};
  return (
    <section className='latest-match-info'>
      <Header />

      <div className='latest-match-info__info'>
        <h1>{
          discipline
        }</h1>
      </div>
    </section>
  )
}

export default MatchInfo
