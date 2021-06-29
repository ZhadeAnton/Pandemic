import { ICartItem } from './CartInterfaces';
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

export type ArrayOfShopItems = Array<IShopItem>

export type IAddShopItem = {
  userUid: IUser['uid'],
  shopItemId: IShopItem['id'],
}

export interface IRemoveShopItem extends IAddShopItem {
  quantity: ICartItem['quantity']
}

export interface IFnRemoveItem {
  (userUid: IUser['uid'],
  hopItemId: ICartItem['id'],
  quantity: ICartItem['quantity']): any
}

export interface IFnRemoveShopItem {
  ({userUid, shopItemId}: IAddShopItem): any
}
