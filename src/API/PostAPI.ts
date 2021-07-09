import { db } from '../Firebase/firebase.config';
import { mapDocsWithId } from '../Utils/APIUtils';

export function getPosts() {
  return db.collection('posts')
      .get()
      .then(mapDocsWithId)
}
