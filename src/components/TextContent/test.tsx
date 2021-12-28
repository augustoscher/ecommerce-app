import { render, screen } from '@testing-library/react'

import TextContent from './index'

describe('<TextContent />', () => {
  it('match snapshot', () => {
    const { container } = render(<TextContent />)

    expect(container).toMatchSnapshot()
  })

  it('should render the heading', () => {
    render(<TextContent />)

    expect(
      screen.getByRole('heading', { name: /TextContent/i })
    ).toBeInTheDocument()
  })
})
