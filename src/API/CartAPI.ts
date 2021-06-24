import { db } from '../Firebase/firebase.config';
import firebase from 'firebase'

import { IUser } from '../Interfaces/UserInterfaces';
import { getReferences, mapDocs } from '../Utils/APIUtils';

export function addItemToUserCart(uid: IUser['uid'], shopItemId: string) {
  return db.collection('users')
      .doc(uid)
      .update({
        cart: firebase.firestore.FieldValue.arrayUnion(db.doc(`/shop/${shopItemId}`))
      })
      .catch((error: any) => console.error(error))
}

export function removeItemFromUserCart(uid: IUser['uid'], shopItemId: string) {
  return db.collection('users')
      .doc(uid)
      .update({
        cart: firebase.firestore.FieldValue.arrayRemove(db.doc(`/shop/${shopItemId}`))
      })
      .catch((error) => console.error(error))
}

export function getShopItemsFromUserCart(userUid: IUser['uid']) {
  return db.collection('users')
      .where('uid', '==', `${userUid}`)
      .get()
      .then(mapDocs)
      .then((userDoc) => userDoc[0].cart)
      .then(getReferences)
      .catch((error) => console.error(error))
}
