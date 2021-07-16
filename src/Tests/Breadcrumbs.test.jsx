import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Breadcrumbs from '../Components/Blocks/Breadcrumbs/Breadcrumbs'

describe('breadcrumbs', () => {
  it('should render items correctly', () => {
    const { container, getByRole, getAllByTestId } = render(
        <Router>
          <Breadcrumbs crumbs={['user', 'cart', 'shop']}/>
        </Router>
    )

    const breadcrumbsList = getByRole('list')
    const breadcrumbItems = getAllByTestId('breadcrumb-item')

    expect(container.firstChild).toHaveClass('breadcrumbs')
    expect(breadcrumbsList).toBeInTheDocument()
    expect(breadcrumbItems.length).toBe(3)
    expect(breadcrumbItems.length).not.toBe(2)
    expect(breadcrumbItems.length).not.toBe(4)
    expect(breadcrumbItems[0]).toHaveTextContent('user')
    expect(breadcrumbItems[1]).toHaveTextContent('cart')
    expect(breadcrumbItems[2]).toHaveTextContent('shop')
    expect(breadcrumbItems[2]).toHaveClass('breadcrumbs__list--item')
  })

  it('should render correctly without props', () => {
    const { container, getByRole, queryAllByTestId } = render(
        <Router>
          <Breadcrumbs crumbs={[]}/>
        </Router>
    )

    const breadcrumbsList = getByRole('list')
    const breadcrumbItems = queryAllByTestId('breadcrumb-item')

    expect(breadcrumbItems.length).toBe(0)
    expect(container.firstChild).toHaveClass('breadcrumbs')
    expect(breadcrumbsList).toBeInTheDocument()
  })

  it('last item should have active class', () => {
    const { queryAllByTestId } = render(
        <Router>
          <Breadcrumbs crumbs={['user', 'cart', 'shop']}/>
        </Router>
    )

    const itemsLinks = queryAllByTestId('breadcrumb-item-link')

    expect(itemsLinks[2]).toHaveClass('breadcrumbs__list--link-active')
    expect(itemsLinks[2]).toHaveClass('breadcrumbs__list--link')
    expect(itemsLinks[2]).toHaveTextContent('shop')
    expect(itemsLinks[2]).toHaveAttribute('href', '/shop')
    expect(itemsLinks[0]).not.toHaveClass('breadcrumbs__list--link-active')
    expect(itemsLinks[1]).not.toHaveClass('breadcrumbs__list--link-active')
    expect(itemsLinks[1]).toHaveClass('breadcrumbs__list--link')
    expect(itemsLinks[1]).toHaveAttribute('href', '/cart')
  })
})
