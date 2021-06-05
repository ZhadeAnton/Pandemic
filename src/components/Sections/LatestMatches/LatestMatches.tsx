import React from 'react'

import './latestMatches.scss'
import { useAppSelector } from '../../../Hooks/PreTypedHooks'

import CustomPagination from '../../Custom/Pagination/Pagination'
import MatchFilter from '../../Blocks/MatchFilter/MatchFilter'
import Heading from '../../Blocks/Heading/Heading'
import MatchList from '../../Blocks/MatchList/MatchList'

function LatestMatches() {
  const matchesPerPage = useAppSelector((state) => state.main.matchesPerPage)
  const currentPage = useAppSelector((state) => state.main.currentPage)
  const matchesLength = useAppSelector((state) => state.main.matches.slice.length)
  const indexOfLastMatch = currentPage * matchesPerPage
  const indexOfFirstMatch = indexOfLastMatch - matchesPerPage
  const currentMatches = useAppSelector((state) => state.main.matches
      .slice(indexOfFirstMatch, indexOfLastMatch))
  const pagesLength = Math.ceil(matchesLength / matchesPerPage)

  return (
    <section className='latest-matches container'>
      <div className='latest-matches__wrapper'>
        <div className='latest-matches__heading'>
          <Heading
            title='latest matches'
            subTitle='handpicked'
          />
        </div>

        <div className='latest-matches__sort-row'>
          <MatchFilter />
        </div>

        <div className='latest-matches__list'>
          <MatchList
            matchesPerPage={matchesPerPage}
            currentPage={currentPage}
            currentMatches={currentMatches}
          />
        </div>
      </div>

      <div className='latest-matches__pagination'>
        <CustomPagination
          matchesPerPage={matchesPerPage}
          currentPage={currentPage}
          pagesLength={pagesLength}
        />
      </div>
    </section>
  )
}

export default LatestMatches
