import { render, screen } from '@testing-library/react'

import Radio from './index'

describe('<Radio />', () => {
  it('match snapshot', () => {
    const { container } = render(<Radio />)
    expect(container).toMatchSnapshot()
  })

  it('should render the heading', () => {
    render(<Radio />)
    expect(screen.getByRole('heading', { name: /Radio/i })).toBeInTheDocument()
  })
})
