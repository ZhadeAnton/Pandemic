import React from 'react'
import { Pagination } from 'react-bootstrap'

import './pagination..scss'
import { useAppDispatch } from '../../../Hooks/PreTypedHooks'
import * as actionCreators from '../../../Redux/General/GeneralActionCreators'

import PageItem from 'react-bootstrap/PageItem'

interface Props {
  itemsPerPage: number,
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
          onClick={() =>dispatch(actionCreators.setFirstPage())}
        />

        <PageItem
          disabled={prevArrowDisable}
          onClick={() =>dispatch(actionCreators.setPrevPage())}
        >
          Prev
        </PageItem>

        {
          pageNumbers.map((num: number, idx: number) => {
            return (
              <PageItem
                key={idx}
                active={props.currentPage === num}
                onClick={() => dispatch(actionCreators.setPageNumber(num))}
              >
                {num}
              </PageItem>
            )
          })
        }

        <Pagination.Next
          disabled={nextArrowDisable}
          onClick={() => dispatch(actionCreators.setNextPage())}
        >
          Next
        </Pagination.Next>

        <Pagination.Last
          disabled={nextArrowDisable}
          onClick={() => dispatch(actionCreators.setLastPage(props.pagesLength))} />
      </Pagination>
    :
      null
  )
}

export default CustomPagination
