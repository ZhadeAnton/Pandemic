import React from 'react'
const Slide = require('react-reveal/Slide')

import './latestMatches.scss'
import { IMatch } from '../../../interfaces'
import { MainPageProps } from '../../../Containers/MainContainer'
import MatchItem from '../../Blocks/MatchItem/MatchItem'
import CustomPagination from '../../Custom/Pagination/Pagination'
import MatchFilter from '../../Custom/MatchFilter/MatchFilter'
import Spinner from '../../Custom/Spinner/Spinner'
import NotFoundMatches from '../../Blocks/NotFoundMatches/NotFoundMatches'

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
        <Slide top>
          <div className='latest-matches__top-banner'>
            <h2 className='latest-matches__top-banner--title'>
            latest matches
            </h2>
            <h6 className='latest-matches__top-banner--sub-title'>
              handpicked
            </h6>
            <span className='latest-matches__top-banner--line'></span>
          </div>
        </Slide>

        <div className='latest-matches__sort-row'>
          <MatchFilter
            disciplines={props.disciplines}
            sortMatches={props.sortMatches}
          />
        </div>

        <ul className='latest-matches__list'>
          {
            props.isLoading
            ?
              <Spinner />
            :
              currentMatches.length !== 0
            ?
              currentMatches.map((match: IMatch, idx: number) => {
                return (
                  <li key={idx} >
                    <MatchItem match={match} />
                  </li>
                )
              })
            :
              <NotFoundMatches />
          }
        </ul>
      </div>

      {
          pagesLength > 1
          ?
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
          :
            null
      }
    </section>
  )
}

export default LatestMatches
