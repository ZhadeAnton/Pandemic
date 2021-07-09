import { useAppDispatch } from './PreTypedHook'
import * as generalActions from '../Redux/General/GeneralActionCreators'

export default function usePagination(pagesLength: number, currentPage: number) {
  const dispatch = useAppDispatch()

  const pageNumbers = []

  for (let i = 1; i <= pagesLength; i++) {
    pageNumbers.push(i)
  }

  const isNextArrowDisable = currentPage > pagesLength - 1 ? true : false
  const isPrevArrowDisable = currentPage === 1 ? true : false

  const handleSetPageNumber= (num: number) => dispatch(generalActions.setPageNumber(num))
  const handleSetFirstPage = () => dispatch(generalActions.setFirstPage())
  const handleSetPrevPage = () => dispatch(generalActions.setPrevPage())
  const handleSetNexPage = () => dispatch(generalActions.setNextPage())
  const handleSetLastPage = (pagesLength: number) => {
    dispatch(generalActions.setLastPage(pagesLength))
  }

  return {
    pageNumbers,
    isNextArrowDisable,
    isPrevArrowDisable,
    handleSetPageNumber,
    handleSetFirstPage,
    handleSetPrevPage,
    handleSetNexPage,
    handleSetLastPage
  }
}
