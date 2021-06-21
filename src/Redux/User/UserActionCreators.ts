import { IUser } from './../../Interfaces/UserInterfaces';
import * as userInterfaces from '../../Interfaces/UserInterfaces'
import * as userActions from './UserActionTypes'
import { IShopItem } from '../../Interfaces/ShopInterfaces';

export const signInWithGoogle = (): userActions.GoogleSignInStart => ({
  type: userActions.GOOGLE_SIGN_IN_START
})

export const signInWithFacebook = (): userActions.FacebookSignInStart => ({
  type: userActions.FACEBOOK_SIGN_IN_START
})

export const signInSuccess = (user: userInterfaces.IUser): userActions.SignInSuccess => ({
  type: userActions.SIGN_IN_SUCCESS,
  payload: user
})

export const signUpWithEmail = ({email, password, displayName: name}
  : userInterfaces.ISignUpWithEmail): userActions.SignUpWithEmail => ({
  type: userActions.SIGN_UP_WITH_EMAIL,
  payload: {email, password, displayName: name}
})

export const signInWithEmail = ({email, password} : userInterfaces.ISignInWithEmail)
  : userActions.SignInWithEmail => ({
  type: userActions.SIGN_IN_WITH_EMAIL,
  payload: {email, password}
})

export const signUpSucess = (): userActions.SignUpSucess => ({
  type: userActions.SIGN_UP_SUCCESS
})

export const signOut = (): userActions.SignOut => ({
  type: userActions.SIGN_OUT
})

export const signOutSuccess = (): userActions.SignOutSucess => ({
  type: userActions.SIGN_OUT_SUCCESS
})

export const addShopItemToCart = (
    uid: IUser['uid'], shopItem: IShopItem['id']): userActions.AddShopItemToCart => ({
  type: userActions.ADD_SHOP_ITEM_TO_CART,
  payload: {uid, shopItem}
})

export const authenticationError = (error: string): userActions.AuthenticationError => ({
  type: userActions.AUTHENTICATION_ERROR,
  payload: error
})

export const resetAuthenticationMessage = (): userActions.ResetAuthenticationMessage => ({
  type: userActions.RESET_AUTHENTICATION_MESSAGE
})
