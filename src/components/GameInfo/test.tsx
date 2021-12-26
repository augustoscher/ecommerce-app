import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

import data from './mock'

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    renderWithTheme(<GameInfo {...data} />)

    // esperar por um heading (title)
    // esperar por description
    // esperar pelo price
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...data} />)

    // esperar button add to cart
    // esperar button wishlist
  })
})
