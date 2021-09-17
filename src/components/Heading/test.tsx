import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render white logo by default', () => {
    renderWithTheme(<Heading>Heading</Heading>)
    expect(screen.getByText(/Heading/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
