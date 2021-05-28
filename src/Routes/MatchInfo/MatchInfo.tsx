import React from 'react'
import MatchItem from '../../components/Blocks/MatchItem/MatchItem'

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
      </div>

      <div className='latest-match-info__stats row container'>
        <div className='latest-match-info__stats--item col-3'>
          <h6>winner</h6>
          <h3>{stats.winner}</h3>
        </div>

        <div className='latest-match-info__stats--item col-2'>
          <h6>kills</h6>
          <h3>{stats.kills}</h3>
        </div>

        <div className='latest-match-info__stats--item col-2'>
          <h6>maps</h6>
          <h3>{stats.maps}</h3>
        </div>

        <div className='latest-match-info__stats--item col-2'>
          <h6>rounds</h6>
          <h3>{stats.rounds}</h3>
        </div>

        <div className='latest-match-info__stats--item col-3'>
          <h6>duration</h6>
          <div>
            <h3>{stats.duration}&nbsp;mins</h3>
          </div>
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
