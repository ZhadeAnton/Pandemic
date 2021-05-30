import React from 'react'
import { Pagination } from 'react-bootstrap'

import './pagination..scss'
import { useAppDispatch } from '../../../PreTypedHooks'
import {
  setPageNumber,
  setFirstPage,
  setPrevPage,
  setNextPage,
  setLastPage
} from '../../../Redux/MainPage/MainActionCreators'

import PageItem from 'react-bootstrap/PageItem'

interface Props {
  matchesPerPage: number,
  currentPage: number,
  pagesLength: number
}

function CustomPagination(props: Props) {
  const dispatch = useAppDispatch()

  const pageNumbers = []

  for (let i = 1; i <= props.pagesLength; i++) {
    pageNumbers.push(i)
  }

  const nextArrowDisable = props.currentPage > props.pagesLength - 1 ? true : false
  const prevArrowDisable = props.currentPage === 1 ? true : false

  return (
    props.pagesLength > 1
    ?
      <Pagination>
        <Pagination.First
          disabled={prevArrowDisable}
          onClick={() =>dispatch(setFirstPage())}
        />

        <PageItem
          disabled={prevArrowDisable}
          onClick={() =>dispatch(setPrevPage())}
        >
          Prev
        </PageItem>

        {
          pageNumbers.map((num: number, idx: number) => {
            return (
              <PageItem
                key={idx}
                active={props.currentPage === num}
                onClick={() => dispatch(setPageNumber(num))}
              >
                {num}
              </PageItem>
            )
          })
        }

        <Pagination.Next
          disabled={nextArrowDisable}
          onClick={() => dispatch(setNextPage())}
        >
          Next
        </Pagination.Next>

        <Pagination.Last
          disabled={nextArrowDisable}
          onClick={() => dispatch(setLastPage(props.pagesLength))} />
      </Pagination>
    :
      null
  )
}

export default CustomPagination
