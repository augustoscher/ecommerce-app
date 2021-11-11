import { render, screen } from '@testing-library/react'

import Auth from './index'

describe('<Auth />', () => {
  it('match snapshot', () => {
    const { container } = render(<Auth />)

    expect(container).toMatchSnapshot()
  })

  it('should render the heading', () => {
    render(<Auth />)

    expect(
      screen.getByRole('heading', { name: /Auth/i })
    ).toBeInTheDocument()
  })
})
