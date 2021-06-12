import { IShopItem } from '../Interfaces/ShopInterfaces'

interface IFilterShopItems {
  [key: string]: (shopItems: Array<IShopItem>) => Array<IShopItem>
}

interface IShopItemsSort {
  [key: string]: (a: any, b:any) => number
}

export const getShopItemsByFilter: IFilterShopItems = ({
  'Default': (shopItems) => shopItems,
  'Sale': (shopItems) => shopItems.filter((item) => item.sale)
})

export const shopItemsSortFn: IShopItemsSort = {
  Price: (a, b) => a.price.slice(1, 3) - b.price.slice(1, 3),
}
