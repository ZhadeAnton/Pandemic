import React from 'react'

import './playerInfo.scss'
import { IPlayerContainer } from '../../Containers/PlayerContainer'

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

function PlayerInfo(props: IPlayerContainer) {
  return (
    <main className='player-page'>
      <section className='player-page__top-row-wrapper'>
        <div className='player-page__top-row container'>
          <PlayerAvatar photo={props.currentPlayer.photo} />

          <div className='player-page__player-info'>
            <h3 className='player-page__player-info--nickname'>
              {props.currentPlayer.nickname}
            </h3>

            <h4 className='player-page__player-info--role'>
              {props.currentPlayer.role}
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
        <StatsList size='medium' stats={props.currentPlayer.stats} />
      </section>

      <Devider />

      <section className='player-page__about container'>
        <Heading title='About' />

        <div className='player-page__about--content'>
          <article className='player-page__about--text'>
            <PlainText text={props.currentPlayer.about} />
          </article>
        </div>

        <div className='player-page__stats-row-bottom'>
          <StatsList stats={props.currentPlayer.measures} size='big' />
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
            <PlayersList players={props.teammates}/>
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
