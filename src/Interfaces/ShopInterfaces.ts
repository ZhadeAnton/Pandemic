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

export type ArrayIShopItemWithQuantity = Array<IShopItemWithQuantity>

export interface IFnRemoveItem {
  (userUid: IUser['uid'],
  hopItemId: IShopItemWithQuantity['id'],
  quantity: IShopItemWithQuantity['quantity']): any
}

export interface IFnIncreaseQuantity {
  (shopItem: IShopItemWithQuantity): any
}

export interface IFnDecreaseQuantity {
  (shopItem: IShopItemWithQuantity): any
}

export interface IFnGetShopItemsFromCartSucces {
  (shopItems: ArrayIShopItemWithQuantity): void
}

export interface IFnGetShopItemsFromCart {
  (userUid: IUser['uid']): any
}

export interface IFnRemoveShopItem {
  ({userUid, shopItemId}: IAddShopItem): any
}

export interface IFnRemoveItemFromCart {
  ({userUid, shopItemId, quantity}: IRemoveShopItem): any
}
