interface Props {
  itemsForSlide: any
  currentPage: number,
  itemsPerPage: number
}

export default function useSliceItems({
  itemsForSlide, currentPage, itemsPerPage}: Props) {
  // Indexes of first and last items
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  // Pagination's buttons
  const pagesLength = Math.ceil(itemsForSlide.length / itemsPerPage)

  // Slicing items by indexes of first and last items
  const slicedItems = itemsForSlide.length > itemsPerPage
  ? itemsForSlide.slice(indexOfFirstItem, indexOfLastItem)
  : itemsForSlide

  return {
    pagesLength, slicedItems
  }
}
