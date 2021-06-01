import React from 'react'

import './matchInfo.scss'
import Heading from '../../components/Blocks/Heading/Heading';
import MatchItem from '../../components/Blocks/MatchItem/MatchItem'
import StatsLine from '../../components/Blocks/StatsLine/StatsLine';
import PlayersList from '../../components/Blocks/PlayersList/PlayersList';
import TeamLine from '../../components/Blocks/TeamLine/TeamLine';

interface Props {
  location: any,
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
  } = (props.location && props.location.state) || {}
  const match = (props.location && props.location.state) || {}

  return (
    <section className='latest-match-info'>
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
          <StatsLine stats={stats}/>
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
