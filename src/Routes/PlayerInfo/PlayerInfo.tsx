import React from 'react'


import './playerInfo.scss'

import PlayerAvatar from '../../components/Blocks/PlayerAvatar/PlayerAvatar'
import PlayerSocial from '../../components/Blocks/PlayerSocial/PlayerSocial'
import StatsLine from '../../components/Blocks/StatsLine/StatsLine'
import VerticalLine from '../../components/Custom/VerticalLine/VerticalLine'
import Heading from '../../components/Blocks/Heading/Heading'
import PlainText from '../../components/Blocks/PlainText/PlainText'
import Devider from '../../components/Custom/Devider/Devider'
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
    <section className='player-page'>
      <div className='player-page__top-row-wrapper'>
        <div className='player-page__top-row-wrapper--overlay'></div>
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
      </div>

      <div className='player-page__stats-row-top container'>
        <StatsLine valueStyle='medium' stats={stats} />
      </div>

      <Devider />

      <div className='player-page__bottom-wrapper container'>
        <div className='player-page__heading'>
          <Heading title='About' />
        </div>

        <div className='player-page__about container'>
          <div className='player-page__about--text'>
            <PlainText text={about} />
          </div>
        </div>

        <div className='player-page__stats-row-bottom container'>
          <StatsLine stats={measures} valueStyle='big' />
        </div>

        <Devider />

        <div className='player-page__heading'>
          <Heading title='Follow' />
        </div>
      </div>
    </section>
  )
}

export default PlayerInfo
