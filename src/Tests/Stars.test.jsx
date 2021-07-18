import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import Stars from '../Components/Custom/Stars/Stars'

describe('stars', () => {
  it('should have a container', () => {
    const { container } = render(
        <Stars starsCount={4} />
    )

    expect(container.firstChild).toHaveClass('stars')
  })

  it('should render always 5 stars', () => {
    const { getAllByTestId } = render(
        <Stars starsCount={2} />
    )

    expect(getAllByTestId('star').length).toBe(5)
  })

  it('should fill stars equal prop', () => {
    const { getAllByTestId } = render(
        <Stars starsCount={2} />
    )

    expect(getAllByTestId('star')[0]).toHaveClass('stars__item--fill')
    expect(getAllByTestId('star')[1]).toHaveClass('stars__item--fill')
    expect(getAllByTestId('star')[2]).not.toHaveClass('stars__item--fill')
  })

  it('should`t render move than 5 star', () => {
    const { getAllByTestId } = render(
        <Stars starsCount={10} />
    )

    expect(getAllByTestId('star').length).toBe(5)
    expect(getAllByTestId('star')[4]).toHaveClass('stars__item--fill')
    expect(getAllByTestId('star')[5]).toBeUndefined()
  })
})
