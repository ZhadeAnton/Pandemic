import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux';
import '@testing-library/jest-dom'

import store from '../Redux/Store/Store';
import SingIn from '../Components/Custom/SingIn/SignIn'

describe('Sign-in', () => {
  it('email form', () => {
    render(
        <Provider store={store}>
          <Router>
            <SingIn />
          </Router>
        </Provider>)

    const emailInput = screen.queryByPlaceholderText('Enter email')

    userEvent.type(emailInput, 'React')

    expect(emailInput).toHaveValue('React')
  })

  it('inputs focus', () => {
    render(
        <Provider store={store}>
          <Router>
            <SingIn />
          </Router>
        </Provider>)

    const passwordInput = screen.queryByPlaceholderText('Password')
    expect(passwordInput).not.toHaveFocus()

    userEvent.click(passwordInput)

    expect(passwordInput).toHaveFocus()
  })

  it('function handler call on inputs', () => {
    const onChange = jest.fn()
    const { container } = render(<input type='text' onChange={onChange}/>)
    const input = container.firstChild;

    userEvent.type(input, 'React')
    expect(onChange).toHaveBeenCalledTimes(5)
  })
})
