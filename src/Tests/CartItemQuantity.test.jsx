import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

import cartReducer from '../Redux/Cart/CartReducer'
import CartItemQuantitny from '../Components/Blocks/CartItemQuantitny/CartItemQuantitny'

const cartItem = {
  id: 'afsdfsgf',
  image: 'https://i.ibb.co/CKSzk2x/1-1.jpg',
  imageFull: 'https://i.ibb.co/CKSzk2x/1-1.jpg',
  title: 'Atari-Black',
  price: '$20',
  popularity: 4,
  description: 'lorem10',
  details: 'lorem30',
  reviews: ['lorem5', 'lorem10', 'lorem20'],
  categories: ['music', 'electronic'],
  sale: true,
  newPrice: '$18',
  quantity: 1
}

const renderWithRedux = (component,
    {initialState, store = createStore(cartReducer, initialState)} = {}) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>), store
  }
}

describe('cart item', () => {
  const OnIncreaseQuantity = jest.fn()
  const OnDecreaseQuantity = jest.fn()

  it('mocked functions have been called', () => {
    const { getByTestId } = renderWithRedux(
        <CartItemQuantitny
          onIncreaseQuantity={OnIncreaseQuantity}
          onDecreaseQuantity={OnDecreaseQuantity}
          cartItem={cartItem}
        />
    )

    const increaseButton = getByTestId('increase-button')
    const decreaseButton = getByTestId('decrease-button')

    userEvent.click(increaseButton)
    expect(OnIncreaseQuantity).toHaveBeenCalledTimes(1)

    userEvent.dblClick(decreaseButton)
    expect(OnDecreaseQuantity).toHaveBeenCalledTimes(2)
  })

  it('mocked function increase quantity', () => {
    const { getByRole, getByTestId } = renderWithRedux(
        <CartItemQuantitny
          onIncreaseQuantity={() => handleIncreaseQuantity(cartItem.quantity)}
          onDecreaseQuantity={() => handleDecreaseQuantity(cartItem.quantity)}
          cartItem={cartItem}
        />
    )

    const mockIncreaseQuantity = jest.fn((quantity) => quantity + 1)
    const mockDecreaseQuantity = jest.fn((quantity) => quantity - 1)

    const handleIncreaseQuantity = (currentQuantity) => {
      cartItem.quantity = mockIncreaseQuantity(currentQuantity)
    }

    const handleDecreaseQuantity = (currentQuantity) => {
      cartItem.quantity = mockDecreaseQuantity(currentQuantity)
    }

    const increaseButton = getByTestId('increase-button')
    const decreaseButton = getByTestId('decrease-button')
    const quantityOutput = getByRole('heading')

    expect(quantityOutput).toHaveTextContent('1')

    userEvent.click(increaseButton)
    expect(cartItem.quantity).toBe(2)

    userEvent.dblClick(increaseButton)
    expect(cartItem.quantity).toBe(4)

    userEvent.dblClick(decreaseButton)
    expect(cartItem.quantity).toBe(2)
  })
})
