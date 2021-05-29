import React from 'react'

import './matchInfo.scss'
import Heading from '../../components/Blocks/Heading/Heading';
import MatchItem from '../../components/Blocks/MatchItem/MatchItem'
import MatchStats from '../../components/Blocks/MatchStats/MatchStats';
import PlayersList from '../../components/Blocks/PlayersList/PlayersList';
import Header from '../../components/Sections/Header/Header'
import TeamLine from '../../components/Blocks/TeamLine/TeamLine';

interface Props {
  [x: string]: any;
}

function MatchInfo(props: Props) {
  const {
    background,
    discipline,
    tournament,
    icon,
    stats,
    team1,
    team2
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

        <div className='latest-match-info__line-up'>
          <Heading title='line ups'/>
        </div>

        <div className='latest-match-info__team-line'>
          <TeamLine tag={team1.tag} teamLogo={team1.logo}/>
        </div>
        <div className='latest-match-info__teammates'>
          <PlayersList players={team1.players}/>
        </div>

        <TeamLine tag={team2.tag} teamLogo={team2.logo}/>
        <div className='latest-match-info__teammates'>
          <PlayersList players={team2.players}/>
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