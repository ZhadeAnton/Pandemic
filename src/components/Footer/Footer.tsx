import React from 'react'

import { esports, importantList, socialList } from '../../Utils/FooterUtils'

import FooterNavList from './FooterNavlist/FooterNavList'
import SocialList from '../Custom/SocialList/SocialList'

import './footer.scss'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__overlay'></div>

      <div className='footer__wrapper'>
        <div className='footer__lists-wrapper'>
          <div className='footer__list'>
            <h3 className='footer__heading'>
              Important
            </h3>

            <FooterNavList list={importantList}/>
          </div>

          <div className='footer__list'>
            <h3 className='footer__heading'>
              Esport
            </h3>

            <FooterNavList list={esports}/>
          </div>
        </div>

        <div className='footer__follow'>
          <h3 className='footer__heading footer__heading-follow'>
            Follow us
          </h3>

          <SocialList socialList={socialList}/>
        </div>
      </div>
    </footer>
  )
}
