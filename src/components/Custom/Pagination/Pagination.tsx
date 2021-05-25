import React from 'react'
import { Pagination } from 'react-bootstrap'

import { MainPageProps } from '../../../Containers/MainContainer'

interface Props {
  setPageNumber: MainPageProps['setPageNumber'],
  setLastPage: MainPageProps['setLastPage'],
  setNextPage: MainPageProps['setNextPage'],
  setPrevPage: MainPageProps['setPrevPage'],
  setFirstPage: MainPageProps['setFirstPage'],
  currentPage: number,
  totalMatches: number,
  matchesPerPage: number
  pagesLength: number
}

function CustomPagination(props: Props) {
  const pageNumbers = []

  for (let i = 1; i <= props.pagesLength; i++) {
    pageNumbers.push(i)
  }

  const nextArrowDisable = props.currentPage > props.pagesLength - 1 ? true : false
  const prevArrowDisable = props.currentPage === 1 ? true : false

  return (
    <Pagination>
      <Pagination.First
        disabled={prevArrowDisable}
        onClick={props.setFirstPage}
      />

      <Pagination.Item
        disabled={prevArrowDisable}
        onClick={props.setPrevPage}
      >
        Prev
      </Pagination.Item>

      {
        pageNumbers.map((num: number, idx: number) => {
          return (
            <Pagination.Item
              key={idx}
              active={props.currentPage === num}
              className='page-item'
              onClick={() => props.setPageNumber(num)}
            >
              {num}
            </Pagination.Item>
          )
        })
      }

      <Pagination.Next
        disabled={nextArrowDisable}
        onClick={props.setNextPage}
      >
        Next
      </Pagination.Next>

      <Pagination.Last
        disabled={nextArrowDisable}
        onClick={() => props.setLastPage(props.pagesLength)} />
    </Pagination>
  )
}

export default CustomPagination
