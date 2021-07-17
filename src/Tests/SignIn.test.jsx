import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux';
import '@testing-library/jest-dom'

import store from '../Redux/Store/Store';
import SingIn from '../Components/Custom/SingIn/SignIn'

describe('sign-in', () => {
  it('should render correctly', () => {
    const { container } = render(
        <Provider store={store}>
          <Router>
            <SingIn />
          </Router>
        </Provider>)

    expect(container.firstChild).toHaveClass('sign-in')
    expect(container.firstChild.nodeName).toBe('FORM')
  })

  it('should have 2 inputs', () => {
    const { getAllByTestId } = render(
        <Provider store={store}>
          <Router>
            <SingIn />
          </Router>
        </Provider>)

    const inputs = getAllByTestId('sign-in-input')

    expect(inputs.length).toBe(2)
    expect(inputs.length).not.toBe(1)
  })

  it('should correctly change focus', () => {
    const { getByPlaceholderText } = render(
        <Provider store={store}>
          <Router>
            <SingIn />
          </Router>
        </Provider>)

    const emailInput = getByPlaceholderText('Enter email')
    const passwordInput = getByPlaceholderText('Password')

    expect(emailInput).toHaveFocus()
    expect(passwordInput).not.toHaveFocus()

    userEvent.click(passwordInput)

    expect(passwordInput).toHaveFocus()
    expect(emailInput).not.toHaveFocus()
  })

  it('should correctly render text', () => {
    const { getByPlaceholderText } = render(
        <Provider store={store}>
          <Router>
            <SingIn />
          </Router>
        </Provider>)

    const emailInput = getByPlaceholderText('Enter email')
    const passwordInput = getByPlaceholderText('Password')

    userEvent.type(emailInput, 'user@gmail.com')

    expect(emailInput).toHaveDisplayValue('user@gmail.com')
    expect(passwordInput).toHaveDisplayValue('')
    expect(passwordInput).not.toHaveDisplayValue('user@gmail.com')
  })
})
