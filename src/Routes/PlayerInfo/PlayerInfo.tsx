import React from 'react'

import './playerInfo.scss'
import { useAppSelector } from '../../PreTypedHooks'
import PlayerAvatar from '../../components/Blocks/PlayerAvatar/PlayerAvatar'
import SocialList from '../../components/Blocks/SocialList/SocialList'
import StatsLine from '../../components/Blocks/StatsLine/StatsLine'
import VerticalLine from '../../components/Custom/VerticalLine/VerticalLine'
import Heading from '../../components/Blocks/Heading/Heading'
import PlainText from '../../components/Blocks/PlainText/PlainText'
import Devider from '../../components/Custom/Devider/Devider'
import PlayerFollow from '../../components/Blocks/PlayerFollow/PlayerFollow'
import PlayersList from '../../components/Blocks/PlayersList/PlayersList'
import ParalaxHeading from '../../components/Blocks/ParalaxHeading/ParalaxHeading'
import Footer from '../../components/Sections/Footer/Footer'

function PlayerInfo() {
  const currentPlayer = useAppSelector((state) => state.main.currentPlayer)
  const relatedMatch = useAppSelector((state) => state.main.currentMatch)

  const playerTag = currentPlayer?.team
  const teammates = relatedMatch?.team1.tag === playerTag
    ? relatedMatch?.team1.players : relatedMatch?.team2.players

  const socialList = [
    'facebook',
    'twitter',
    'youtube',
    'instagram',
    'twitch',
    'discord'
  ]

  return (
    <main className='player-page'>
      <section className='player-page__top-row-wrapper'>
        <div className='player-page__top-row container'>
          <PlayerAvatar photo={currentPlayer!.photo} />

          <div className='player-page__player-info'>
            <h3 className='player-page__player-info--nickname'>
              {currentPlayer!.nickname}
            </h3>

            <h4 className='player-page__player-info--role'>
              {currentPlayer!.role}
            </h4>

            <div className='player-page__player-info--social'>
              <SocialList socialList={socialList}/>
            </div>
          </div>
        </div>

        <div className='player-page__player-info--vertical-line'>
          <VerticalLine />
        </div>

        <div className='player-page__top-row-wrapper--overlay'></div>
      </section>

      <section className='player-page__stats-row-top'>
        <StatsLine valueStyle='medium' stats={currentPlayer!.stats} />
      </section>

      <Devider />

      <section className='player-page__section-about container'>
        <div className='player-page__heading'>
          <Heading title='About' />
        </div>

        <div className='player-page__about'>
          <article className='player-page__about--text'>
            <PlainText text={currentPlayer!.about} />
          </article>
        </div>

        <div className='player-page__stats-row-bottom'>
          <StatsLine stats={currentPlayer!.measures} valueStyle='big' />
        </div>
      </section>

      <Devider />

      <section className='player-page__follow container'>
        <div className='player-page__follow--heading player-page__heading'>
          <Heading title='Follow' />
        </div>

        <div className='player-page__follow--list'>
          <PlayerFollow />
        </div>
      </section>

      <section className='player-page__related-teammates'>
        <div className='player-page__related-teammates--wrapper container'>
          <div className='player-page__related-teammates--heading'>
            <Heading title='Related teammates' />
          </div>

          <div className='player-page__related-teammates--list'>
            <PlayersList players={teammates}/>
          </div>
        </div>
      </section>

      <section>
        <ParalaxHeading />
      </section>

      <Footer />
    </main>
  )
}

export default PlayerInfo
