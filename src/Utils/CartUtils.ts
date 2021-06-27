import { IShopItemWithQuantity } from '../Interfaces/ShopInterfaces'
import { ICartState } from '../Redux/Cart/CartReducer'

export const increaseQuantityFromItem = (
    cartItems: ICartState['cartItems'], newItem: IShopItemWithQuantity) => {
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

export const decreaseQuantityFromItem = (
    cartItems: ICartState['cartItems'], cartItemRemove: IShopItemWithQuantity) => {
  const existingItem = cartItems.find((item) => item.id === cartItemRemove.id)

  if (existingItem?.quantity === 1) return cartItems

  if (existingItem && existingItem.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
  }

  return [...cartItems, { ...cartItemRemove, quantity: cartItemRemove.quantity }]
}
