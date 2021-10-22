// import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Checkbox />)
  })
})
