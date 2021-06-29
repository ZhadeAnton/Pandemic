import { IRemoveShopItem, IShopItem } from './ShopInterfaces';
import { IUser } from './UserInterfaces';

export interface ICartItem extends IShopItem {
  quantity: number
}

export type ArrayICartItems = Array<ICartItem>

export interface IFnRemoveItemFromCart {
  ({userUid, shopItemId, quantity}: IRemoveShopItem): any
}

export interface IFnAddShopItemToCart {
  (userUid: IUser['uid'], shopItemId: IShopItem['id']): void
}

export interface IFnGetShopItemsFromCartSucces {
  (shopItems: ArrayICartItems): void
}

export interface IFnGetShopItemsFromCart {
  (userUid: IUser['uid']): any
}

export interface IFnIncreaseQuantity {
  (shopItem: ICartItem): any
}

export interface IFnDecreaseQuantity {
  (shopItem: ICartItem): any
}

export interface IFnClearCart {
  (userUid: IUser['uid']): any
}
