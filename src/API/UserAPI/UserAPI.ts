import { db } from '../../Firebase/firebase.config';
import { IUser } from '../../Interfaces/UserInterfaces';

export function addShopItemToUserCart(uid: IUser['uid'], data: {}) {
  return db.collection('users')
      .doc(uid)
      .update(data)
      .catch((error) => console.error(error))
}
