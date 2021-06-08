import React from 'react'

import './matchInfo.scss'
import Heading from '../../Components/Blocks/Heading/Heading';
import MatchItem from '../../Components/Blocks/MatchItem/MatchItem'
import StatsList from '../../Components/Blocks/StatsList/StatsList';
import PlayersList from '../../Components/Blocks/PlayersList/PlayersList';
import TeamLine from '../../Components/Blocks/TeamLine/TeamLine';
import VerticalLine from '../../Components/Custom/VerticalLine/VerticalLine';
import { useAppSelector } from '../../Hooks/PreTypedHooks';
import ParallaxHeading from '../../Components/Sections/ParallaxHeading/ParallaxHeading';
import Footer from '../../Components/Sections/Footer/Footer';

interface Props {
  location: any,
}

function MatchInfo(props: Props) {
  const currentMatch = useAppSelector((state) => state.match.currentMatch)

  return (
    <main className='latest-match-page'>
      <section className='latest-match-page__match-info container'>
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
          <StatsList stats={currentMatch!.stats} valueStyle='medium' />
        </div>

        <div className='latest-match-page__match-info--image-wrapper'>
          <img
            className='latest-match-page__match-info--image'
            src={currentMatch!.background}
            alt={currentMatch!.discipline}
          />
        </div>
      </section>

      <section className='latest-match-page__line-up container'>
        <Heading title='line ups'/>

        <div className='latest-match-page__team-line'>
          <TeamLine tag={currentMatch!.team1.tag} teamLogo={currentMatch!.team1.logo}/>
        </div>
        <div className='latest-match-page__teammates'>
          <PlayersList players={currentMatch!.team1.players}/>
        </div>
        <div className='latest-match-page__team-line'>
          <TeamLine tag={currentMatch!.team2.tag} teamLogo={currentMatch!.team2.logo}/>
        </div>
        <div className='latest-match-page__teammates'>
          <PlayersList players={currentMatch!.team2.players}/>
        </div>
      </section>

      <section className='latest-match-page__parallax'>
        <ParallaxHeading />
      </section>

      <Footer />
    </main>
  )
}

export default MatchInfo
