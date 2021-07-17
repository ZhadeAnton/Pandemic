import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux';
import '@testing-library/jest-dom'

import store from '../Redux/Store/Store';
import SingUp from '../Components/Custom/SignUp/SignUp'

describe('sign-up', () => {
  it('should render correctly', () => {
    const { container } = render(
        <Provider store={store}>
          <Router>
            <SingUp />
          </Router>
        </Provider>)

    expect(container.firstChild).toHaveClass('sign-up')
    expect(container.firstChild.nodeName).toBe('FORM')
  })

  it('should have 4 inputs', () => {
    const { getAllByTestId } = render(
        <Provider store={store}>
          <Router>
            <SingUp />
          </Router>
        </Provider>)

    const inputs = getAllByTestId('sign-up-input')

    expect(inputs.length).toBe(4)
    expect(inputs.length).not.toBe(5)
  })

  it('email input should have required attribute', () => {
    const { getByPlaceholderText } = render(
        <Provider store={store}>
          <Router>
            <SingUp />
          </Router>
        </Provider>)

    const emailInput = getByPlaceholderText('Enter email')
    const nameInput = getByPlaceholderText('Name')

    expect(emailInput).toHaveAttribute('type', 'email')
    expect(emailInput).toHaveAttribute('name', 'email')
    expect(emailInput).toBeRequired()
    expect(nameInput).not.toBeRequired()
  })

  it('should call onChage function', () => {
    const { getByPlaceholderText } = render(
        <Provider store={store}>
          <Router>
            <SingUp />
          </Router>
        </Provider>)

    const emailInput = getByPlaceholderText('Enter email')
    const nameInput = getByPlaceholderText('Name')

    userEvent.type(emailInput, 'React')

    expect(emailInput).toHaveDisplayValue('React')
    expect(emailInput).not.toHaveDisplayValue('Vue')
    expect(nameInput).toHaveDisplayValue('')

    userEvent.type(nameInput, 'Vue')

    expect(nameInput).toHaveDisplayValue('Vue')
    expect(nameInput).not.toHaveDisplayValue('React')
  })

  it('should correctly change focus', () => {
    const { getByPlaceholderText } = render(
        <Provider store={store}>
          <Router>
            <SingUp />
          </Router>
        </Provider>)

    const emailInput = getByPlaceholderText('Enter email')
    const nameInput = getByPlaceholderText('Name')

    expect(nameInput).toHaveFocus()
    expect(emailInput).not.toHaveFocus()

    userEvent.click(emailInput)

    expect(emailInput).toHaveFocus()
    expect(nameInput).not.toHaveFocus()
  })

  it('should render equality password and confirm pasword', () => {
    const { getByPlaceholderText } = render(
        <Provider store={store}>
          <Router>
            <SingUp />
          </Router>
        </Provider>)

    const passwordInput = getByPlaceholderText('Password')
    const confirmPasswordInput = getByPlaceholderText('Confirm Password')

    userEvent.click(passwordInput)

    expect(passwordInput).toHaveFocus()
    expect(confirmPasswordInput).not.toHaveFocus()
    expect(passwordInput).toHaveDisplayValue('')

    userEvent.type(passwordInput, 'Qwe123')
    expect(passwordInput).toHaveDisplayValue('Qwe123')

    userEvent.type(confirmPasswordInput, 'Qwe123')
    expect(confirmPasswordInput).toHaveDisplayValue('Qwe123')
  })
})
