import { render, screen } from '@testing-library/react'

import GameCard from './index'

describe('<GameCard />', () => {
  it('match snapshot', () => {
    const { container } = render(<GameCard />)

    expect(container).toMatchSnapshot()
  })

  it('should render the heading', () => {
    render(<GameCard />)

    expect(
      screen.getByRole('heading', { name: /GameCard/i })
    ).toBeInTheDocument()
  })
})
