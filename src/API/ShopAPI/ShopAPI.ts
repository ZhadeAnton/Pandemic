import { db } from '../../Firebase/firebase.config';
import { IUser } from '../../Interfaces/UserInterfaces';
import { mapDocs, mapDocsWithId } from '../../Utils/APIUtils'

export function getShopItems() {
  return db.collection('shop')
      .get()
      .then(mapDocsWithId)
}

export default function getShopItemsFromUserCart(userUid: IUser['uid']) {
  return db.collection('users')
      .where('uid', '==', `${userUid}`)
      .get()
      .then(mapDocs)
}
