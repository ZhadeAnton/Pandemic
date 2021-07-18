import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import ShopItemDetails from '../Components/Shop/ShopItemDetails/ShopItemDetails'
import ShopItemPrice from '../Components/Shop/ShopItemPrice/ShopItemPrice'
import ShopButton from '../Components/Shop/ShopButton/ShopButton'

const mockAddToCart = jest.fn()

const currentItem = {
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

const mainComponent = render(
    <ShopItemDetails
      currentItem={currentItem}
      handleAddItemToCart={mockAddToCart}
    />
)

describe('shop item details', () => {
  it('item details component should have wrapper with className', () => {
    const { container } = mainComponent
    expect(container.firstChild).toHaveClass('shop-item-details')
  })

  it('shop item price have to equal $20 with sale prop', () => {
    const { getByTestId } = render(
        <ShopItemPrice
          sale={currentItem.sale}
          oldPrice={currentItem.price}
          newPrice={currentItem.newPrice}
        />
    )

    expect(getByTestId('shop-item-price-old')).toHaveTextContent('$20')
    expect(getByTestId('shop-item-price-new')).toHaveTextContent('$18')
  })

  it('shop item price works properly without sale prop', () => {
    const { getByRole } = render(
        <ShopItemPrice
          oldPrice={currentItem.price}
        />
    )

    expect(getByRole('heading')).toHaveTextContent('$20')
    expect(getByRole('heading')).toHaveClass('shop-item-price__default')
  })

  it('shop item add button ashould been called on the user click', () => {
    const { getByRole } = render(
        <ShopButton
          onClick={mockAddToCart}
        />
    )

    userEvent.click(getByRole('button'))
    expect(mockAddToCart).toHaveBeenCalledTimes(1)
  })

  it('shop button should have an special classes', () => {
    const { getByRole } = render(
        <ShopButton
          onClick={mockAddToCart}
        />
    )

    expect(getByRole('button')).toHaveClass('shop-button')
    expect(getByRole('icon')).toHaveClass('shop-button__icon')
    expect(getByRole('heading')).toHaveClass('shop-button__title')
  })
})
