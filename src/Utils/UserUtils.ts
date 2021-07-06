import { auth, db } from '../Firebase/firebase.config'
import { IShopItem } from '../Interfaces/ShopInterfaces'
import { IUser } from '../Interfaces/UserInterfaces'

interface IFnFilterUserCart {
  (userCart: IUser['cart'], shopItemId: IShopItem['id']): Array<IShopItem['id']>
}

interface IFnAddItemToUserCart {
  (userCart: IUser['cart'], shopItemId: IShopItem['id']): Array<IShopItem['id']>
}

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

export const removeItemFromCart: IFnFilterUserCart = (userCart, shopItemId) => {
  return userCart.filter((item) => item !== shopItemId)
}

export const addItemToCart: IFnAddItemToUserCart = (userCart, shopItemId) => {
  return userCart.includes(shopItemId) ? userCart : userCart.concat(shopItemId)
}
