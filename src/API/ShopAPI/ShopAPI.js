import { db } from '../../Firebase/firebase.config';
import { mapDocs } from '../utils'

export function fetchShopItems() {
  return db.collection('shop')
      .get()
      .then(mapDocs)
}
