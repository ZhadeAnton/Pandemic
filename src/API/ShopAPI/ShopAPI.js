import { db } from '../../Firebase/firebase.config';
import { getReferences, mapDocs, mapDocsWithId } from '../../Utils/APIUtils'

export function getShopItems() {
  return db.collection('shop')
      .get()
      .then(mapDocsWithId)
}

export function getShopItemsFromUserCart(userUid) {
  return db.collection('users')
      .where('uid', '==', `${userUid}`)
      .get()
      .then(mapDocs)
      .then((userDoc) => userDoc[0].cart)
      .then(getReferences)
      .catch((error) => console.error(error))
}
