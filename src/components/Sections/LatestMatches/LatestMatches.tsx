import React, { useState } from 'react'

import { IMatch } from '../../../interfaces'
import { MainPageProps } from '../../../Containers/MainContainer'
import MatchItem from '../../Blocks/MatchItem/MatchItem'
import CustomPagination from '../../Custom/Pagination/Pagination'

import './latestMatches.scss'

interface Props {
  matches: MainPageProps['matches']
}

function LatestMatches(props: Props) {
  const [currentPage, setCurrentPage] = useState(1)
  const matchesPerPage = 1;
  const totalMatches = props.matches.length
  const indexOfLastMatch = currentPage * matchesPerPage
  const indexOfFirstMatch = indexOfLastMatch - matchesPerPage
  const currentMatches = props.matches.slice(indexOfFirstMatch, indexOfLastMatch)
  const pagesLength = Math.ceil(totalMatches / matchesPerPage)

  const setPage = (pageNum: number) => setCurrentPage(pageNum)
  const setNextPage = () => setCurrentPage(currentPage + 1)
  const setPrevPage = () => setCurrentPage(currentPage - 1)
  const setFirstPage = () => setCurrentPage(1)
  const setLastPage = () => setCurrentPage(pagesLength)

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
        currentPage={currentPage}
        totalMatches={totalMatches}
        matchesPerPage={matchesPerPage}
        pagesLength={pagesLength}
        setPage={setPage}
        setNextPage={setNextPage}
        setPrevPage={setPrevPage}
        setFirstPage={setFirstPage}
        setLastPage={setLastPage}
      />
    </section>
  )
}

export default LatestMatches
