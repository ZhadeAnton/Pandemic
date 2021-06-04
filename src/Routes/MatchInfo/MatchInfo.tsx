import React from 'react'

import './matchInfo.scss'
import Heading from '../../components/Blocks/Heading/Heading';
import MatchItem from '../../components/Blocks/MatchItem/MatchItem'
import StatsLine from '../../components/Blocks/StatsLine/StatsLine';
import PlayersList from '../../components/Blocks/PlayersList/PlayersList';
import TeamLine from '../../components/Blocks/TeamLine/TeamLine';
import VerticalLine from '../../components/Custom/VerticalLine/VerticalLine';
import { useAppSelector } from '../../PreTypedHooks';

interface Props {
  location: any,
}

function MatchInfo(props: Props) {
  const currentMatch = useAppSelector((state) => state.main.currentMatch)

  return (
    <section className='latest-match-page'>
      <div className='latest-match-page__wrapper container'>
        <div className='latest-match-page__match-info'>
          <h4 className='latest-match-page__match-info--title'>
            {currentMatch!.tournament}
          </h4>

          <div className='latest-match-page__match-info--match'>
            <MatchItem match={currentMatch!} />
          </div>

          <div className='latest-match-page__match-info--icon-wrapper'>
            <img
              className='latest-match-page__match-info--icon'
              src={currentMatch!.icon}
              alt={currentMatch!.discipline}
            />
          </div>

          <div className='latest-match-page__match-info--vertical-line-top'>
            <VerticalLine />
          </div>

          <div className='latest-match-page__match-info--match-stats'>
            <StatsLine stats={currentMatch!.stats} valueStyle='medium' />
          </div>

          <div className='latest-match-page__match-info--image-wrapper'>
            <img
              className='latest-match-page__match-info--image'
              src={currentMatch!.background}
              alt={currentMatch!.discipline}
            />
          </div>
        </div>

        <div className='latest-match-page__heading'>
          <Heading title='line ups'/>
        </div>

        <div className='latest-match-page__team-line'>
          <TeamLine tag={currentMatch!.team1.tag} teamLogo={currentMatch!.team1.logo}/>
        </div>
        <div className='latest-match-page__teammates'>
          <PlayersList players={currentMatch!.team1.players}/>
        </div>

        <TeamLine tag={currentMatch!.team2.tag} teamLogo={currentMatch!.team2.logo}/>
        <div className='latest-match-page__teammates'>
          <PlayersList players={currentMatch!.team2.players}/>
        </div>
      </div>
    </section>
  )
}

export default MatchInfo
