import React from 'react'

import { IMatch } from '../../../interfaces'
import { MainPageProps } from '../../../Containers/MainContainer'
import MatchItem from '../../Blocks/MatchItem/MatchItem'
import CustomPagination from '../../Custom/Pagination/Pagination'

import './latestMatches.scss'

interface Props {
  matches: MainPageProps['matches'],
  currentPage: MainPageProps['currentPage'],
  matchesPerPage: MainPageProps['matchesPerPage'],
  setPageNumber: MainPageProps['setPageNumber'],
  setLastPage: MainPageProps['setLastPage'],
  setNextPage: MainPageProps['setNextPage'],
  setPrevPage: MainPageProps['setPrevPage'],
  setFirstPage: MainPageProps['setFirstPage']
}

function LatestMatches(props: Props) {
  const totalMatches = props.matches.length
  const indexOfLastMatch =
    props.currentPage * props.matchesPerPage
  const indexOfFirstMatch = indexOfLastMatch - props.matchesPerPage
  const currentMatches = props.matches.slice(indexOfFirstMatch, indexOfLastMatch)
  const pagesLength = Math.ceil(totalMatches / props.matchesPerPage)

  return (
    <section className='latest-matches'>
      <div className='latest-matches__wrapper container'>
        <div className='latest-matches__top-banner'>
          <h2 className='latest-matches__top-banner--title'>
            latest matches
          </h2>
          <h6 className='latest-matches__top-banner--sub-title'>
            handpicked
          </h6>
          <span className='latest-matches__top-banner--line'></span>
        </div>

        <div className='latest-matches__slider'>
          {
            currentMatches.map((match: IMatch, idx: number) => {
              return (
                <MatchItem
                  key={idx}
                  match={match}
                />
              )
            })
          }
        </div>
      </div>

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
    </section>
  )
}

export default LatestMatches
