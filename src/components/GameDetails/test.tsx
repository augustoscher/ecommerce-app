import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameDetails from './index'

describe('<GameDetails />', () => {
  it('match snapshot', () => {
    const { container } = renderWithTheme(<GameDetails />)

    expect(screen.getByText(/Game Details/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
