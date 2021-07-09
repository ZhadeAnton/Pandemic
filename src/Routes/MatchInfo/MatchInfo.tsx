import React from 'react'

import './matchInfo.scss'
import { IMatchContainer } from '../../Containers/MatchContainer';

import Heading from '../../Components/Blocks/Heading/Heading';
import MatchItem from '../../Components/Blocks/MatchItem/MatchItem'
import StatsList from '../../Components/Blocks/StatsList/StatsList';
import PlayersList from '../../Components/Blocks/PlayersList/PlayersList';
import TeamLine from '../../Components/Blocks/TeamLine/TeamLine';
import VerticalLine from '../../Components/Custom/VerticalLine/VerticalLine';
import ParallaxHeading from '../../Components/Sections/ParallaxHeading/ParallaxHeading';
import Footer from '../../Components/Sections/Footer/Footer';

function MatchInfo(props: IMatchContainer) {
  return (
    <main className='latest-match-page'>
      <section className='latest-match-page__match-info container'>
        <h4 className='latest-match-page__match-info--title'>
          {props.currentMatch.tournament}
        </h4>

        <div className='latest-match-page__match-info--match'>
          <MatchItem match={props.currentMatch} />
        </div>

        <div className='latest-match-page__match-info--icon-wrapper'>
          <img
            className='latest-match-page__match-info--icon'
            src={props.currentMatch.icon}
            alt={props.currentMatch.discipline}
          />
        </div>

        <div className='latest-match-page__match-info--vertical-line-top'>
          <VerticalLine />
        </div>

        <div className='latest-match-page__match-info--match-stats'>
          <StatsList stats={props.currentMatch.stats} size='medium' />
        </div>

        <div className='latest-match-page__match-info--image-wrapper'>
          <img
            className='latest-match-page__match-info--image'
            src={props.currentMatch.background}
            alt={props.currentMatch.discipline}
          />
        </div>
      </section>

      <section className='latest-match-page__line-up container'>
        <Heading title='line ups'/>

        <div className='latest-match-page__team-line'>
          <TeamLine
            tag={props.currentMatch.team1.tag}
            teamLogo={props.currentMatch.team1.logo}
          />
        </div>
        <div className='latest-match-page__teammates'>
          <PlayersList players={props.currentMatch.team1.players}/>
        </div>
        <div className='latest-match-page__team-line'>
          <TeamLine
            tag={props.currentMatch.team2.tag}
            teamLogo={props.currentMatch.team2.logo}
          />
        </div>
        <div className='latest-match-page__teammates'>
          <PlayersList players={props.currentMatch.team2.players}/>
        </div>
      </section>

      <section className='latest-match-page__parallax'>
        <ParallaxHeading backgroundImage='war'/>
      </section>

      <Footer />
    </main>
  )
}

export default MatchInfo
