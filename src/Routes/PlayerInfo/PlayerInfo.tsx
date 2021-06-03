import React from 'react'

import './playerInfo.scss'

import PlayerAvatar from '../../components/Blocks/PlayerAvatar/PlayerAvatar'
import PlayerSocial from '../../components/Blocks/PlayerSocial/PlayerSocial'
import StatsLine from '../../components/Blocks/StatsLine/StatsLine'
import VerticalLine from '../../components/Custom/VerticalLine/VerticalLine'
import Heading from '../../components/Blocks/Heading/Heading'
import PlainText from '../../components/Blocks/PlainText/PlainText'
import Devider from '../../components/Custom/Devider/Devider'
import PlayerFollow from '../../components/Blocks/PlayerFollow/PlayerFollow'
// import AnimatedNumber from '../../components/Custom/AnimateNumber/AnimateNumber'

interface Props {
  location: any
}

function PlayerInfo(props: Props) {
  const {
    photo,
    nickname,
    role,
    stats,
    measures,
    about
  } = (props.location && props.location.state) || {}

  return (
    <main className='player-page'>
      <section className='player-page__top-row-wrapper'>
        <div className='player-page__top-row container'>
          <PlayerAvatar photo={photo} />

          <div className='player-page__player-info'>
            <h3 className='player-page__player-info--nickname'>
              {nickname}
            </h3>

            <h4 className='player-page__player-info--role'>
              {role}
            </h4>

            <div className='player-page__player-info--social'>
              <PlayerSocial />
            </div>
          </div>
        </div>

        <div className='player-page__player-info--vertical-line'>
          <VerticalLine />
        </div>

        <div className='player-page__top-row-wrapper--overlay'></div>
      </section>

      <section className='player-page__stats-row-top'>
        <StatsLine valueStyle='medium' stats={stats} />
      </section>

      <Devider />

      <section className='player-page__section-about container'>
        <div className='player-page__heading'>
          <Heading title='About' />
        </div>

        <div className='player-page__about'>
          <article className='player-page__about--text'>
            <PlainText text={about} />
          </article>
        </div>

        <div className='player-page__stats-row-bottom'>
          <StatsLine stats={measures} valueStyle='big' />
        </div>
      </section>

      <Devider />

      <section className='player-page__section-follow container'>
        <div className='player-page__heading'>
          <Heading title='Follow' />
        </div>

        <div className='player-page__follow'>
          <PlayerFollow />
        </div>
      </section>
    </main>
  )
}

export default PlayerInfo
