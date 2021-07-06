import React from 'react'
import { Pagination } from 'react-bootstrap'

import './pagination..scss'
import usePagination from '../../../Hooks/PaginationHook'

import PageItem from 'react-bootstrap/PageItem'

interface Props {
  itemsPerPage: number,
  currentPage: number,
  pagesLength: number
}

function CustomPagination(props: Props) {
  const pagination = usePagination(props.pagesLength, props.currentPage)

  return (
    props.pagesLength > 1
    ?
      <Pagination>
        <Pagination.First
          disabled={pagination.prevArrowDisable}
          onClick={pagination.handleSetFirstPage}
        />

        <PageItem
          disabled={pagination.prevArrowDisable}
          onClick={pagination.handleSetPrevPage}
        >
          Prev
        </PageItem>

        {
          pagination.pageNumbers.map((num: number, idx: number) => {
            return (
              <PageItem
                key={idx}
                active={props.currentPage === num}
                onClick={() => pagination.handleSetPageNumber(num)}
              >
                {num}
              </PageItem>
            )
          })
        }

        <Pagination.Next
          disabled={pagination.nextArrowDisable}
          onClick={() => pagination.handleSetNexPage()}
        >
          Next
        </Pagination.Next>

        <Pagination.Last
          disabled={pagination.nextArrowDisable}
          onClick={() => pagination.handleSetLastPage(props.pagesLength)} />
      </Pagination>
    :
      null
  )
}

export default CustomPagination
