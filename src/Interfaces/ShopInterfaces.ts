import { IUser } from './UserInterfaces';

export interface IShopItem {
  id: string,
  image: string,
  imageFull: string,
  title: string,
  price: string,
  popularity: number,
  description: string,
  details: string,
  reviews: Array<string>,
  categories: Array<string>,
  sale?: boolean,
  newPrice?: string
}

export type IAddShopItem = {
  userUid: IUser['uid'],
  shopItemId: IShopItem['id'],
}

export interface IRemoveShopItem extends IAddShopItem {
  quantity: IShopItemWithQuantity['quantity']
}

export interface IShopItemWithQuantity extends IShopItem {
  quantity: number
}
