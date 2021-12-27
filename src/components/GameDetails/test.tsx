import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameDetails from './index'

describe('<GameDetails />', () => {
  it('match snapshot', () => {
    const { container } = renderWithTheme(
      <GameDetails platforms={['windows', 'linux', 'mac']} />
    )

    expect(screen.getByText(/Game Details/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
