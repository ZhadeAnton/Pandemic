import { db } from './firebase.config';

export function fetchAnnounces() {
  return db.collection('announces')
      .get()
      .then((res) => res.docs.map((doc: any) => ({
        ...doc.data()
      })))
}