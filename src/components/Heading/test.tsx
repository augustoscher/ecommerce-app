import { render, screen } from '@testing-library/react'

import Heading from './index'

describe('<Heading />', () => {
  it('match snapshot', () => {
    const { container } = render(<Heading />)

    expect(container).toMatchSnapshot()
  })

  it('should render the heading', () => {
    render(<Heading />)

    expect(
      screen.getByRole('heading', { name: /Heading/i })
    ).toBeInTheDocument()
  })
})
