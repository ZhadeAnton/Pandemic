import { db } from '../Firebase/firebase.config';
import firebase from 'firebase'

import { IUser } from '../Interfaces/UserInterfaces';
import { ICartItem } from '../Interfaces/CartInterfaces';
import { getReferencesFromCart, mapDocs } from '../Utils/APIUtils';

export function addItemToUserCart(
    uid: IUser['uid'], shopItemId: ICartItem['id']) {
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

export function removeItemFromUserCart(
    uid: IUser['uid'], shopItemId: string, quantity: ICartItem['quantity']) {
  return db.collection('users')
      .doc(uid)
      .update({
        cart: firebase.firestore.FieldValue.arrayRemove({
          item: db.doc(`/shop/${shopItemId}`),
          quantity: quantity
        })
      })
      .catch((error) => console.error(error))
}

export function clearUserCart(uid: IUser['uid']) {
  return db.collection('users')
      .doc(uid)
      .update({cart: []})
      .catch((error) => console.error(error))
}

export function getShopItemsFromUserCart(userUid: IUser['uid']) {
  return db.collection('users')
      .where('uid', '==', `${userUid}`)
      .get()
      .then(mapDocs)
      .then((userDoc) => userDoc[0].cart)
      .then(getReferencesFromCart)
      .catch((error) => console.error(error))
}
