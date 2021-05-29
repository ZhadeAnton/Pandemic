import React from 'react'
import MatchItem from '../../components/Blocks/MatchItem/MatchItem'
import MatchStats from '../../components/Blocks/MatchStats/MatchStats';

import Header from '../../components/Sections/Header/Header'

import './matchInfo.scss'

interface Props {
  [x: string]: any;
}

function MatchInfo(props: Props) {
  const {
    background,
    discipline,
    tournament,
    icon,
    stats
  } = (props.location && props.location.state) || {};
  const match = (props.location && props.location.state) || {};
  return (
    <section className='latest-match-info'>
      <Header />

      <div className='latest-match-info__wrapper container'>
        <div className='latest-match-info__match-container'>
          <h4 className='latest-match-info__match-container--title'>
            {tournament}
          </h4>

          <div className='latest-match-info__match-container--match'>
            <MatchItem match={match} />
          </div>

          <div className='latest-match-info__match-container--icon-wrapper'>
            <img
              className='latest-match-info__match-container--icon'
              src={icon}
              alt={discipline}
            />
          </div>
        </div>

        <div className='latest-match-info__match-container--match-stats'>
          <MatchStats stats={stats}/>
        </div>
      </div>

      <div className='latest-match-info__image-wrapper'>
        <img
          className='latest-match-info__image-wrapper--image'
          src={background}
          alt={discipline}
        />
      </div>
    </section>
  )
}

export default MatchInfo
