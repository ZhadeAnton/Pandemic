import { auth, db } from '../Firebase/firebase.config'
import { IUser } from '../Interfaces/UserInterfaces'

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}

export const creacteUserProfileDocument = async (
    userAuth: {[key: string]: string}, additionalData: {}) => {
  if (!userAuth) return

  const userRef = db.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const {displayName, email, uid, photoURL} = userAuth
    const createAt = new Date()
    const cart: IUser['cart'] = []

    try {
      await userRef.set({
        displayName,
        email,
        uid,
        photoURL,
        cart,
        createAt,
        ...additionalData,
      })
    } catch (error) {
      console.error(error)
    }
  }
  return userRef;
}
