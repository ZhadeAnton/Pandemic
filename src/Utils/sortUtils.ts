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
  price: (a, b) => a.price - b.price,
}
