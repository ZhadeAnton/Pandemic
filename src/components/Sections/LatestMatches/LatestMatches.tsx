import React from 'react'

import './latestMatches.scss'
import { MainPageProps } from '../../../Containers/MainContainer'
import CustomPagination from '../../Custom/Pagination/Pagination'
import MatchFilter from '../../Custom/MatchFilter/MatchFilter'
import Heading from '../../Blocks/Heading/Heading'
import MatchList from '../../Blocks/MatchList/MatchList'

interface Props {
  matches: MainPageProps['matches'],
  isLoading: MainPageProps['isLoading'],
  disciplines: MainPageProps['disciplines'],
  currentPage: MainPageProps['currentPage'],
  matchesPerPage: MainPageProps['matchesPerPage'],
  setPageNumber: MainPageProps['setPageNumber'],
  setLastPage: MainPageProps['setLastPage'],
  setNextPage: MainPageProps['setNextPage'],
  setPrevPage: MainPageProps['setPrevPage'],
  setFirstPage: MainPageProps['setFirstPage'],
  sortMatches: MainPageProps['sortMatches']
}

function LatestMatches(props: Props) {
  const totalMatches = props.matches.length
  const indexOfLastMatch =
    props.currentPage * props.matchesPerPage
  const indexOfFirstMatch = indexOfLastMatch - props.matchesPerPage
  const currentMatches = props.matches.slice(indexOfFirstMatch, indexOfLastMatch)
  const pagesLength = Math.ceil(totalMatches / props.matchesPerPage)

  return (
    <section className='latest-matches container'>
      <div className='latest-matches__wrapper'>
        <div className='latest-matches__heading'>
          <Heading />
        </div>

        <div className='latest-matches__sort-row'>
          <MatchFilter
            disciplines={props.disciplines}
            sortMatches={props.sortMatches}
          />
        </div>

        <div className='latest-matches__list'>
          <MatchList
            currentMatches={currentMatches}
            isLoading={props.isLoading}
          />
        </div>
      </div>

      <div className='latest-matches__pagination'>
        <CustomPagination
          currentPage={props.currentPage}
          matchesPerPage={props.matchesPerPage}
          totalMatches={totalMatches}
          pagesLength={pagesLength}
          setPageNumber={props.setPageNumber}
          setNextPage={props.setNextPage}
          setPrevPage={props.setPrevPage}
          setFirstPage={props.setFirstPage}
          setLastPage={props.setLastPage}
        />
      </div>
    </section>
  )
}

export default LatestMatches
