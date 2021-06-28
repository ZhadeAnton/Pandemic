import { IShopItem } from './ShopInterfaces';

export interface ICartItem extends IShopItem {
  quantity: number
}

export type ArrayICartItem = Array<ICartItem>
