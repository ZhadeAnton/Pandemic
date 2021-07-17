import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import matchReducer from '../Redux/Match/MatchReduces'
import MatchList from '../Components/Blocks/MatchList/MatchList'

const initialMatchState = {
  matches: [],
  isLoading: false
}

const renderWithRedux = (component,
    {initialState, store = createStore(matchReducer, initialState)} = {}) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>), store
  }
}

describe('Match list', () => {
  it('list no to be null', () => {
    const { getByRole } = renderWithRedux(
        <MatchList
          currentMatches={initialMatchState.matches}
          isLoading={initialMatchState.isLoading}
        />
    )
    expect(getByRole('list')).not.toBeNull()
    expect(getByRole('list')).toHaveClass('match-list')
  })

  it('if list is empty, have to return string', () => {
    const { getByRole } = renderWithRedux(
        <MatchList
          currentMatches={initialMatchState.matches}
          isLoading={initialMatchState.isLoading}
        />
    )

    expect(getByRole('heading')).toHaveTextContent('No discipline events were held...')
  })

  it('if prop isLoading = true, list have to contain a spinner', () => {
    const { getByTestId } = renderWithRedux(
        <MatchList
          currentMatches={initialMatchState.matches}
          isLoading={true}
        />
    )

    const spinner = getByTestId('spinner')
    expect(spinner).toBeInTheDocument()
    expect(spinner).toHaveClass('spinner')
  })
})
