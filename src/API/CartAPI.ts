import { db } from '../Firebase/firebase.config';
import firebase from 'firebase'

import {
  IFnAddShopItemToCart,
  IFnClearCart,
  IFnGetShopItemsFromCart,
  IFnRemoveItemFromCart } from '../Interfaces/CartInterfaces';
import { getReferencesFromCart, mapDocs } from '../Utils/APIUtils';
import { IRemoveShopItem } from '../Interfaces/ShopInterfaces';

export const addItemToUserCart: IFnAddShopItemToCart = (uid, shopItemId) => {
  return db.collection('users')
      .doc(uid)
      .update({
        cart: firebase.firestore.FieldValue.arrayUnion({
          item: db.doc(`/shop/${shopItemId}`),
          quantity: 1
        })
      })
      .catch((error: any) => console.error(error))
}

export const removeItemFromUserCart: IFnRemoveItemFromCart = (
    {userUid, shopItemId, quantity}: IRemoveShopItem) => {
  return db.collection('users')
      .doc(userUid)
      .update({
        cart: firebase.firestore.FieldValue.arrayRemove({
          item: db.doc(`/shop/${shopItemId}`),
          quantity: quantity
        })
      })
      .catch((error) => console.error(error))
}

export const clearUserCart: IFnClearCart = (uid) => {
  return db.collection('users')
      .doc(uid)
      .update({cart: []})
      .catch((error) => console.error(error))
}

export const getShopItemsFromUserCart: IFnGetShopItemsFromCart = (userUid) => {
  return db.collection('users')
      .where('uid', '==', `${userUid}`)
      .get()
      .then(mapDocs)
      .then((userDoc) => userDoc[0].cart)
      .then(getReferencesFromCart)
      .catch((error) => console.error(error))
}
