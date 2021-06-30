import { ICartItem, ArrayICartItems } from '../Interfaces/CartInterfaces'

interface IIncreaseItemsQuantity {
  (cartItems: ArrayICartItems,
   newItem: ICartItem): ArrayICartItems
}

interface IDecreaseItemsQuantity {
  (cartItems: ArrayICartItems,
  itemRemove: ICartItem): ArrayICartItems
}

interface IGetTotalPriceOfCartItems {
  (itemPrice: ICartItem['price'],
  itemNewPrice: ICartItem['newPrice'],
  itemQuantity: ICartItem['quantity']
  ): number
}

interface IParsCartItemsPrice {
  (itemPrice: ICartItem['price'] | ICartItem['newPrice']): number
}

export const increaseItemQuantity: IIncreaseItemsQuantity = (cartItems, newItem) => {
  const excistingItem = cartItems.find((item) =>
    item.id === newItem.id
  )

  if (excistingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...newItem, quantity: 1 }]
}

export const decreaseItemQuantity: IDecreaseItemsQuantity = (cartItems, itemRemove) => {
  const isCartItemExist = cartItems.find((item) => item.id === itemRemove.id)

  if (isCartItemExist?.quantity === 1) return cartItems

  if (isCartItemExist && isCartItemExist.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...itemRemove, quantity: itemRemove.quantity }]
}

export const parceItemPrice: IParsCartItemsPrice = (itemPrice) => {
  if (itemPrice) return +itemPrice.slice(1)

  return 0
}

export const getTotalPriceOfCartItems: IGetTotalPriceOfCartItems =
(itemPrice, itemNewPrice, itemQuantity) => {
  const oldPrice = parceItemPrice(itemPrice)

  if (itemPrice && itemNewPrice !== undefined) {
    const salePrice = parceItemPrice(itemNewPrice)
    const priceRange = oldPrice - salePrice
    const newPrice = oldPrice - priceRange

    return newPrice * itemQuantity
  }

  return oldPrice * itemQuantity
}
