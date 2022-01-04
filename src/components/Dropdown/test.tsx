import { render, screen } from '@testing-library/react'

import Dropdown from './index'

describe('<Dropdown />', () => {
  it('should render the heading', () => {
    render(
      <Dropdown title="click me">
        <h1>asd</h1>
      </Dropdown>
    )

    expect(
      screen.getByRole('heading', { name: /Dropdown/i })
    ).toBeInTheDocument()
  })
})
