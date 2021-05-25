import React from 'react'
import { Pagination } from 'react-bootstrap'

interface Props {
  setPage: (pageNum: number) => void,
  setNextPage: () => void,
  setPrevPage: () => void,
  setFirstPage: () => void,
  setLastPage: () => void,
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
      <Pagination.First onClick={() => props.setFirstPage()} />

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
              onClick={() =>props.setPage(num)}
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

      <Pagination.Last onClick={props.setLastPage} />
    </Pagination>
  )
}

export default CustomPagination
