import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import CartPage from '../Routes/CartPage/CartPage'
import ButtonSecondary from '../Components/Custom/ButtonSecondary/ButtonSecondary'
import CartList from '../Components/Blocks/CartList/CartList'

const mockHandleClearCart = jest.fn()
const mockHandleRemoveItem = jest.fn()
const mockHandleIncreaseQuantity = jest.fn()
const mockHandleDecreaseQuantity = jest.fn()

// Cart item with sale
const cartItem1 = {
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
  newPrice: '$18'
}

// Cart item without sale
const cartItem2 = {
  id: 'bf5hgfd3',
  image: 'https://i.ibb.co/CKSzk2x/1-1.jpg',
  imageFull: 'https://i.ibb.co/CKSzk2x/1-1.jpg',
  title: 'Atari-Black',
  price: '$12',
  popularity: 5,
  description: 'lorem10',
  details: 'lorem30',
  reviews: ['lorem5', 'lorem10', 'lorem20'],
  categories: ['music', 'electronic']
}

const cartItems = [cartItem1, cartItem2]

const initialState = {
  userUid: 'fAad4gdfg',
  cartItems: [cartItem1],
  isLoading: false,
  handleClearCart: mockHandleClearCart,
  handleRemoveItem: mockHandleRemoveItem,
  handleIncreaseQuantity: mockHandleIncreaseQuantity,
  handleDecreaseQuantity: mockHandleDecreaseQuantity
}

describe('cart page', () => {
  it('should correctly render in the document', () => {
    const { container, queryByTestId } = render(
        <Router>
          <CartPage {...initialState}/>
        </Router>
    )

    const cartEmpty = queryByTestId('cart-empty')

    expect(container).toBeInTheDocument()
    expect(cartEmpty).not.toBeInTheDocument()
  })

  it('should render cart empty component without cart items', () => {
    const { queryByTestId } = render(
        <Router>
          <CartPage {...initialState} cartItems={[]}/>
        </Router>
    )

    const cartEmpty = queryByTestId('cart-empty')

    expect(cartEmpty).toBeInTheDocument()
    expect(cartEmpty).toHaveTextContent(/cart is empty/i)
  })
})

describe('cart total', () => {
  it('should render price from prop', () => {
    const { getByTestId } = render(
        <Router>
          <CartPage {...initialState} totalPrice={10}/>
        </Router>
    )

    const totalPriceOutput = getByTestId('cart-total-output')

    expect(totalPriceOutput).toBeDefined()
    expect(totalPriceOutput).toHaveTextContent('$10')
    expect(totalPriceOutput).not.toHaveTextContent('@')
    expect(totalPriceOutput).not.toBe('10')
    expect(totalPriceOutput).not.toBe('$')
    expect(totalPriceOutput).not.toBe('$20')
  })

  it('should recive negative value correctly', () => {
    const { getByTestId } = render(
        <Router>
          <CartPage {...initialState} totalPrice={-100}/>
        </Router>
    )

    const totalPriceOutput = getByTestId('cart-total-output')

    expect(totalPriceOutput).toHaveTextContent('$-100')
    expect(totalPriceOutput).not.toBe('$100')
  })
})

describe('clear cart button', () => {
  it('should redner children (title) correctly', () => {
    const { container } = render(
        <ButtonSecondary>
          Clear cart
        </ButtonSecondary>
    )

    expect(container.firstChild).toHaveClass('button-secondary')
    expect(container.firstChild).toHaveTextContent('Clear cart')
    expect(container.firstChild).not.toHaveTextContent('Reset')
    expect(container.firstChild).not.toBe('Clear cart +')
  })

  it('should have been called eqaul times with user`s click', () => {
    const handleClearCart = jest.fn()

    const { container } = render(
        <ButtonSecondary onClick={handleClearCart}>
          Clear cart
        </ButtonSecondary>
    )

    expect(handleClearCart).toHaveBeenCalledTimes(0)

    userEvent.click(container.firstChild)

    expect(handleClearCart).toHaveBeenCalledTimes(1)
    expect(handleClearCart).not.toHaveBeenCalledTimes(2)
  })
})

describe('cart list', () => {
  it('should render cart items equal prop (1)', () => {
    const { container, getAllByTestId } = render(
        <CartList
          cartItems={initialState.cartItems}
          onDecreaseQuantity={initialState.handleDecreaseQuantity}
          onIncreaseQuantity={initialState.handleIncreaseQuantity}
          onRemoveCartItem={initialState.handleRemoveItem}
        />
    )

    expect(container.firstChild).toBeInTheDocument()
    expect(getAllByTestId('cart-item').length).toBe(1)
  })

  it('should render cart items equal prop (2)', () => {
    const { container, getAllByTestId } = render(
        <CartList
          cartItems={cartItems}
          onDecreaseQuantity={initialState.handleDecreaseQuantity}
          onIncreaseQuantity={initialState.handleIncreaseQuantity}
          onRemoveCartItem={initialState.handleRemoveItem}
        />
    )

    expect(container.firstChild).toBeInTheDocument()
    expect(getAllByTestId('cart-item').length).toBe(2)
  })

  it('should correctly render cart list component without item prop', () => {
    const { container, queryByTestId } = render(
        <CartList
          cartItems={[]}
          onDecreaseQuantity={initialState.handleDecreaseQuantity}
          onIncreaseQuantity={initialState.handleIncreaseQuantity}
          onRemoveCartItem={initialState.handleRemoveItem}
        />
    )

    const cartList = container.firstChild
    const cartItem = queryByTestId('cart-item')

    expect(cartList).toBeInTheDocument()
    expect(cartList).toHaveClass('cart-list')
    expect(cartItem).toBeNull()
    expect(cartItem).not.toBeInTheDocument()
  })
})
