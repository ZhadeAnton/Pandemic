import { IShopItem } from '../Interfaces/ShopInterfaces'
import { useAppSelector } from './PreTypedHooks'

export default function useShopPaginationHook() {
  const handlePagination = (shopItems: Array<IShopItem>) => {
    // Initial values of page's sizing
    const itemsPerPage = useAppSelector((state) => state.shop.itemsPerPage)
    const currentPage = useAppSelector((state) => state.shop.currentPage)

    // Indexes of first and last items
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage

    // Pagination's buttons
    const pagesLength = Math.ceil(shopItems.length / itemsPerPage)

    // Slicing items by indexes of first and last items
    const slicedItems = shopItems.length > itemsPerPage
    ? shopItems.slice(indexOfFirstItem, indexOfLastItem)
    : shopItems

    return {slicedItems, pagesLength, currentPage, itemsPerPage}
  }

  return {
    handlePagination
  }
}
