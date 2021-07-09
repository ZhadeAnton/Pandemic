import { IShopItem } from './ShopInterfaces';

export interface IUser {
  uid: string | undefined,
  email: string,
  displayName: string,
  createAt: {[key: string]: string},
  cart: Array<IShopItem['id']>,
  photoURL?: string | undefined,
  data?: any
}

interface IUserCredentionals {
  email: string,
  password: string,
}

export type ISignInWithEmail = IUserCredentionals

export interface ISignUpWithEmail extends IUserCredentionals {
  displayName: string
}
