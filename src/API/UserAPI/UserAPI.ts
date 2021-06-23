import { db } from '../../Firebase/firebase.config';
import firebase from 'firebase'

import { IUser } from '../../Interfaces/UserInterfaces';

export function addItemToUserCart(uid: IUser['uid'], shopItemId: string) {
  return db.collection('users')
      .doc(uid)
      .update({
        cart: firebase.firestore.FieldValue.arrayUnion(db.doc(`/shop/${shopItemId}`))
      })
      .catch((error) => console.error(error))
}

export function removeItemFromUserCart(uid: IUser['uid'], shopItemId: string) {
  return db.collection('users')
      .doc(uid)
      .update({
        cart: firebase.firestore.FieldValue.arrayRemove(`/shop/${shopItemId}`)
      })
      .catch((error) => console.error(error))
}
