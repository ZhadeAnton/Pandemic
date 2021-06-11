import * as actions from './GeneralActionTypes'

export const setPageNumber = (pageNum: number): actions.SetPageNumber => ({
  type: actions.SET_PAGE_NUMBER,
  payload: pageNum
})

export const setNextPage = (): actions.SetNextPage => ({
  type: actions.SET_NEXT_PAGE
})

export const setPrevPage = (): actions.SetPrevPage => ({
  type: actions.SET_PREV_PAGE
})

export const setFirstPage = (): actions.SetFirstPage => ({
  type: actions.SET_FIRST_PAGE
})

export const setLastPage = (lastPageNumber: number): actions.SetLastPage => ({
  type: actions.SET_LAST_PAGE,
  payload: lastPageNumber
})
