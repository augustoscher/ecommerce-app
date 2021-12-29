import { render, screen } from '@testing-library/react'

import Game from './index'

describe('<Game />', () => {
  it('match snapshot', () => {
    const { container } = render(<Game />)

    expect(container).toMatchSnapshot()
  })

  it('should render the heading', () => {
    render(<Game />)

    expect(screen.getByRole('heading', { name: /Game/i })).toBeInTheDocument()
  })
})
