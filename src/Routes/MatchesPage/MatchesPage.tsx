import React from 'react'

import './matchesPage.scss'

import LatestMatches from '../../Components/Match/LatestMatches/LatestMatches'
import { IMatchesContainer } from '../../Containers/MatchesPageContainer'

import Footer from '../../Components/Footer/Footer'
import ParallaxHeading from '../../Components/ParallaxHeading/ParallaxHeading'

export default function MatchesPage(props: IMatchesContainer) {
  return (
    <main className='matches-page'>
      <section className='matches-page__content'>
        <LatestMatches
          matchesPerPage={props.matchesPerPage}
          disciplines={props.disciplines}
          initialLatestMatches={props.initialLatestMatches}
          currentPage={props.currentPage}
          matchesLength={props.matchesLength}
          pagesLength={props.pagesLength}
          slicedMatches={props.slicedMatches}
          isLoading={props.isLoading}
        />
      </section>

      <ParallaxHeading backgroundImage='war'/>

      <Footer />
    </main>
  )
}
