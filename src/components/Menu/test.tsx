import { render, screen } from '@testing-library/react'

import Menu from './index'

describe('<Menu />', () => {
  it('match snapshot', () => {
    const { container } = render(<Menu />)

    expect(container).toMatchSnapshot()
  })

  it('should render the heading', () => {
    render(<Menu />)

    expect(screen.getByRole('heading', { name: /Menu/i })).toBeInTheDocument()
  })
})
