import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

import data from './mock'

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    const { container } = renderWithTheme(<GameInfo {...data} />)

    expect(
      screen.getByRole('heading', { name: /borderlands 3/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/\$215,00/)).toBeInTheDocument()
    expect(
      screen.getByText(
        /Experience the epic space strategy games that redefined the RTS genre. Control your fleet and build an armada across more than 30 single-player missions./i
      )
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...data} />)

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
