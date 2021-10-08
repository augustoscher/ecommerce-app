import { render, screen } from '@testing-library/react'

import Home from './index'

describe('<Home />', () => {
  it('match snapshot', () => {
    const { container } = render(<Home />)

    expect(container).toMatchSnapshot()
  })

  it('should render the heading', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', { name: /Home/i })
    ).toBeInTheDocument()
  })
})
