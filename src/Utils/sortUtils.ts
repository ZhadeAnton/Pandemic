import { IShopItem } from '../Interfaces/ShopInterfaces'

interface IFilterShopItems {
  [key: string]: (shopItems: Array<IShopItem>) => Array<IShopItem>
}

interface IShopItemsSort {
  [key: string]: (a: any, b:any) => number
}

interface IRelatedShopItems {
  (shopItems: Array<IShopItem>, category: Array<string>): Array<IShopItem>
}

interface IFilterShopItemsByTag {
  (filterBy: string, initialItems: Array<IShopItem>): Array<IShopItem>
}

interface ISortShopItemsByTag {
  (sortedBy: string, initialItems: Array<IShopItem>): Array<IShopItem>
}

export const getShopItemsByFilter: IFilterShopItems = ({
  'Default': (shopItems) => shopItems,
  'Sale': (shopItems) => shopItems.filter((item) => item.sale)
})

export const getRelatedShopItems: IRelatedShopItems = (shopItems, category) => {
  const relatedItems = shopItems.map((item) => {
    return item.categories.some((c) => category.includes(c)) ? item : null
  })

  return relatedItems.filter((item) => item !== null) as Array<IShopItem>
}

export const shopItemsSortFn: IShopItemsSort = {
  ['Price: low to high']: (a, b) => a.price.slice(1, 3) - b.price.slice(1, 3),
  ['Price: high to low']: (a, b) => b.price.slice(1, 3) - a.price.slice(1, 3),
  ['Name']: (a, b) => b.title.localeCompare(a.title),
  ['Popularity']: (a, b) => b.popularity - a.popularity
}

export const filterShopItemsByTag: IFilterShopItemsByTag = (filterBy, initialItems) => {
  return filterBy !== 'Default'
  ? getShopItemsByFilter[filterBy](initialItems)
  : initialItems
}

export const sortShopItemsByTag: ISortShopItemsByTag = (sortedBy, initialItems) => {
  return sortedBy !== 'Default'
  ? initialItems.slice().sort(shopItemsSortFn[sortedBy])
  : initialItems
}

export const sortingNames = [
  'Default',
  'Price: low to high',
  'Price: high to low',
  'Name',
  'Popularity'
]

export const filteringNames = ['Default', 'Sale']
