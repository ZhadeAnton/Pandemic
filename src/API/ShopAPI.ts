import { db } from '../Firebase/firebase.config';
import { mapDocsWithId } from '../Utils/APIUtils'

export function getShopItems() {
  return db.collection('shop')
      .get()
      .then(mapDocsWithId)
}
