import React from 'react'

import './playerInfo.scss'
import { useAppSelector } from '../../Hooks/PreTypedHooks'
import PlayerAvatar from '../../Components/Blocks/PlayerAvatar/PlayerAvatar'
import SocialList from '../../Components/Blocks/SocialList/SocialList'
import StatsList from '../../Components/Blocks/StatsList/StatsList'
import VerticalLine from '../../Components/Custom/VerticalLine/VerticalLine'
import Heading from '../../Components/Blocks/Heading/Heading'
import PlainText from '../../Components/Blocks/PlainText/PlainText'
import Devider from '../../Components/Custom/Devider/Devider'
import PlayerFollow from '../../Components/Blocks/PlayerFollow/PlayerFollow'
import PlayersList from '../../Components/Blocks/PlayersList/PlayersList'
import ParallaxHeading from '../../Components/Sections/ParallaxHeading/ParallaxHeading'
import Footer from '../../Components/Sections/Footer/Footer'

function PlayerInfo() {
  const currentPlayer = useAppSelector((state) => state.match.currentPlayer)
  const relatedMatch = useAppSelector((state) => state.match.currentMatch)

  const playerTag = currentPlayer?.team
  const teammates = relatedMatch?.team1.tag === playerTag
    ? relatedMatch?.team1.players : relatedMatch?.team2.players

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
              <SocialList />
            </div>
          </div>
        </div>

        <div className='player-page__player-info--vertical-line'>
          <VerticalLine />
        </div>

        <div className='player-page__top-row-wrapper--overlay'></div>
      </section>

      <section className='player-page__stats-row-top'>
        <StatsList valueStyle='medium' stats={currentPlayer!.stats} />
      </section>

      <Devider />

      <section className='player-page__about container'>
        <Heading title='About' />

        <div className='player-page__about--content'>
          <article className='player-page__about--text'>
            <PlainText text={currentPlayer!.about} />
          </article>
        </div>

        <div className='player-page__stats-row-bottom'>
          <StatsList stats={currentPlayer!.measures} valueStyle='big' />
        </div>
      </section>

      <Devider />

      <section className='player-page__follow container'>
        <Heading title='Follow' />

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
        <ParallaxHeading />
      </section>

      <Footer />
    </main>
  )
}

export default PlayerInfo
