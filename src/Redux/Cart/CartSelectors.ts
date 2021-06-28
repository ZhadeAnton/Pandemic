import { createSelector } from 'reselect'

import { RootState } from '../Store/Store'
import { ICartItem } from '../../Interfaces/CartInterfaces'

export const cartSelector = (state: RootState) => state.cart

export const cartItemsSelector = createSelector(
    [cartSelector],
    (cart) => cart.cartItems
)

export const totalPriceItemsSelector = createSelector(
    [cartItemsSelector],
    (items) => items.reduce(
        (acc, cartItem) => {
          return acc + parsePriceOfCartItem(cartItem.price)
        }, 0)
)

const parsePriceOfCartItem = (cartItemPrice: ICartItem['price']) => {
  return +cartItemPrice.slice(1)
}
