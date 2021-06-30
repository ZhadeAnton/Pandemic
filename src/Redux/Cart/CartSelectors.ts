import { createSelector } from 'reselect'
import { getTotalPriceOfCartItems } from '../../Utils/CartUtils'

import { RootState } from '../Store/Store'

export const cartSelector = (state: RootState) => state.cart

export const cartItemsSelector = createSelector(
    [cartSelector],
    (cart) => cart.cartItems
)

export const totalPriceItemsSelector = createSelector(
    [cartItemsSelector],
    (items) => items.reduce(
        (acc, cartItem) => {
          return acc +
          getTotalPriceOfCartItems(cartItem.price, cartItem.newPrice, cartItem.quantity)
        }, 0)
)
