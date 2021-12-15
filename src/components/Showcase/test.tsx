import { render, screen } from '@testing-library/react'

import Showcase from './index'

describe('<Showcase />', () => {
  it('match snapshot', () => {
    const { container } = render(<Showcase />)

    expect(container).toMatchSnapshot()
  })

  it('should render the heading', () => {
    render(<Showcase />)

    expect(
      screen.getByRole('heading', { name: /Showcase/i })
    ).toBeInTheDocument()
  })
})
