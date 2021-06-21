import { db } from '../../Firebase/firebase.config';
import { mapDocsWithId } from '../../Utils/APIUtils'

export function fetchShopItems() {
  return db.collection('shop')
      .get()
      .then(mapDocsWithId)
}
