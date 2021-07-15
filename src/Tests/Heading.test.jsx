import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Heading from '../Components/Blocks/Heading/Heading'

describe('heading', () => {
  const propTitle = 'Gaming'
  const propSubTitle = 'pro'

  it('heading title', () => {
    const { getByTestId } = render(<Heading title={propTitle}/>)
    const heading = getByTestId('heading-title')

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Gaming')
  })

  it('heading subtitle', () => {
    const { getByTestId } = render(
        <Heading
          title={propTitle}
          subTitle={propSubTitle}
        />)

    const subTitle = getByTestId('heading-subtitle')
    expect(subTitle).toHaveTextContent('pro')
  })

  it('subtitle without prop doesn`t have to be render', () => {
    const { queryByTestId } = render(
        <Heading
          title={propTitle}
          subTitle=''
        />)

    const subTitle = queryByTestId('heading-subtitle')
    expect(subTitle).not.toBeInTheDocument()
  })
})
