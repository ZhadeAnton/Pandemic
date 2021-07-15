import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

import cartReducer from '../Redux/Cart/CartReducer'
import CartItemQuantitny from '../Components/Blocks/CartItemQuantitny/CartItemQuantitny'

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
          cartItem={{quantity: 1}}
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
    let quantity = 1

    const mockIncreaseQuantity = jest.fn((quantity) => quantity + 1)
    const mockDecreaseQuantity = jest.fn((quantity) => quantity - 1)

    const handleIncreaseQuantity = (currentQuantity) => {
      quantity = mockIncreaseQuantity(currentQuantity)
    }

    const handleDecreaseQuantity = (currentQuantity) => {
      quantity = mockDecreaseQuantity(currentQuantity)
    }

    const { getByRole, getByTestId } = renderWithRedux(
        <CartItemQuantitny
          onIncreaseQuantity={() => handleIncreaseQuantity(quantity)}
          onDecreaseQuantity={() => handleDecreaseQuantity(quantity)}
          cartItem={{quantity}}
        />
    )

    const increaseButton = getByTestId('increase-button')
    const decreaseButton = getByTestId('decrease-button')
    const quantityOutput = getByRole('heading')

    expect(quantityOutput).toHaveTextContent('1')

    userEvent.click(increaseButton)
    expect(quantity).toBe(2)

    userEvent.dblClick(increaseButton)
    expect(quantity).toBe(4)

    userEvent.dblClick(decreaseButton)
    expect(quantity).toBe(2)
  })
})
