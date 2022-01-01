import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Profile from '.'

describe('<Profile />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <Profile>
        <span>test</span>
      </Profile>
    )

    expect(
      screen.getByRole('heading', { name: /My Profile/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
