// import { IShopItem } from './ShopInterfaces';

export interface IUser {
  uid: string,
  email: string,
  displayName: string,
  createAt: {[key: string]: string},
  cart: any,
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
