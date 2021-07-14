import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import CartEmpty from '../Components/Blocks/CartEmpty/CartEmpty'

describe('CartEmpty', () => {
  it('CartEmpty rendering', () => {
    render(
        <Router>
          <CartEmpty />
        </Router>)

    expect(screen.getByText(/cart/i)).toBeInTheDocument()
  })
})
