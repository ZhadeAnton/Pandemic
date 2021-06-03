import React from 'react'

import './matchInfo.scss'
import Heading from '../../components/Blocks/Heading/Heading';
import MatchItem from '../../components/Blocks/MatchItem/MatchItem'
import StatsLine from '../../components/Blocks/StatsLine/StatsLine';
import PlayersList from '../../components/Blocks/PlayersList/PlayersList';
import TeamLine from '../../components/Blocks/TeamLine/TeamLine';
import VerticalLine from '../../components/Custom/VerticalLine/VerticalLine';

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
    <section className='latest-match-page'>
      <div className='latest-match-page__wrapper container'>
        <div className='latest-match-page__match-info'>
          <h4 className='latest-match-page__match-info--title'>
            {tournament}
          </h4>

          <div className='latest-match-page__match-info--match'>
            <MatchItem match={match} />
          </div>

          <div className='latest-match-page__match-info--icon-wrapper'>
            <img
              className='latest-match-page__match-info--icon'
              src={icon}
              alt={discipline}
            />
          </div>

          <div className='latest-match-page__match-info--vertical-line-top'>
            <VerticalLine />
          </div>

          <div className='latest-match-page__match-info--match-stats'>
            <StatsLine stats={stats} valueStyle='medium' />
          </div>

          <div className='latest-match-page__match-info--image-wrapper'>
            <img
              className='latest-match-page__match-info--image'
              src={background}
              alt={discipline}
            />
          </div>
        </div>

        <div className='latest-match-page__heading'>
          <Heading title='line ups'/>
        </div>

        <div className='latest-match-page__team-line'>
          <TeamLine tag={team1.tag} teamLogo={team1.logo}/>
        </div>
        <div className='latest-match-page__teammates'>
          <PlayersList players={team1.players}/>
        </div>

        <TeamLine tag={team2.tag} teamLogo={team2.logo}/>
        <div className='latest-match-page__teammates'>
          <PlayersList players={team2.players}/>
        </div>
      </div>
    </section>
  )
}

export default MatchInfo
