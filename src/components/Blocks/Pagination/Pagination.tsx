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
        <PageItem
          disabled={pagination.isPrevArrowDisable}
          onClick={pagination.handleSetFirstPage}
        >
          &#171;
        </PageItem>

        <PageItem
          disabled={pagination.isPrevArrowDisable}
          onClick={pagination.handleSetPrevPage}
        >
          Prev
        </PageItem>

        {
          pagination.pageNumbers.map((num: number, idx: number) => {
            return (
              <PageItem
                key={idx}
                activeLabel=''
                active={props.currentPage === num}
                onClick={() => pagination.handleSetPageNumber(num)}
              >
                {num}
              </PageItem>
            )
          })
        }

        <PageItem
          disabled={pagination.isNextArrowDisable}
          onClick={() => pagination.handleSetNexPage()}
        >
          Next
        </PageItem>

        <PageItem
          disabled={pagination.isNextArrowDisable}
          onClick={() => pagination.handleSetLastPage(props.pagesLength)}
        >
          &#187;
        </PageItem>
      </Pagination>
    :
      null
  )
}

export default CustomPagination
