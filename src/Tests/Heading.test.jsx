import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Heading from '../Components/Heading/Heading'

describe('heading', () => {
  const propTitle = 'Gaming'
  const propSubTitle = 'pro'

  it('should correctly render title', () => {
    const { getByTestId } = render(
        <Heading title={propTitle}/>
    )

    const heading = getByTestId('heading-title')

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Gaming')
  })

  it('should correctly render subtitle with prop', () => {
    const { getByTestId } = render(
        <Heading
          title={propTitle}
          subTitle={propSubTitle}
        />)

    const subTitle = getByTestId('heading-subtitle')

    expect(subTitle).toBeInTheDocument()
    expect(subTitle).toHaveTextContent('pro')
  })

  it('subtitle without prop should`n be render', () => {
    const { queryByTestId } = render(
        <Heading
          title={propTitle}
        />)

    const subTitle = queryByTestId('heading-subtitle')

    expect(subTitle).not.toBeInTheDocument()
    expect(subTitle).not.toBe('pro')
  })
})
