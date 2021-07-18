import React from 'react'

import './latestMatches.scss'
import { ArrayOfMatches } from '../../../Interfaces/MatchInterfaces'
import { ArrayOfIDisciplines } from '../../../Interfaces/MainInterfaces'

import CustomPagination from '../../Pagination/Pagination'
import MatchFilter from '../MatchFilter/MatchFilter'
import Heading from '../../Heading/Heading'
import MatchList from '../MatchList/MatchList'

interface Props {
  slicedMatches: ArrayOfMatches,
  disciplines: ArrayOfIDisciplines,
  initialLatestMatches: string,
  matchesPerPage: number,
  currentPage: number,
  matchesLength: number,
  pagesLength: number,
  isLoading: boolean
}

function LatestMatches(props: Props) {
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
          <MatchFilter
            initialLatestMatches={props.initialLatestMatches}
            disciplines={props.disciplines}
          />
        </div>

        <div className='latest-matches__list'>
          <MatchList
            currentMatches={props.slicedMatches}
            isLoading={props.isLoading}
          />
        </div>
      </div>

      <div className='latest-matches__pagination'>
        <CustomPagination
          itemsPerPage={props.matchesPerPage}
          currentPage={props.currentPage}
          pagesLength={props.pagesLength}
        />
      </div>
    </section>
  )
}

export default LatestMatches
