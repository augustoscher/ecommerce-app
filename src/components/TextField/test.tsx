import { render, screen } from '@testing-library/react'

import TextField from './index'

describe('<TextField />', () => {
  it('match snapshot', () => {
    const { container } = render(<TextField />)

    expect(container).toMatchSnapshot()
  })

  it('should render the heading', () => {
    render(<TextField />)

    expect(
      screen.getByRole('heading', { name: /TextField/i })
    ).toBeInTheDocument()
  })
})
