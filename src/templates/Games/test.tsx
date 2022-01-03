import { render, screen } from '@testing-library/react'

import Games from './index'

describe('<Games />', () => {
  it('match snapshot', () => {
    const { container } = render(<Games />)

    expect(container).toMatchSnapshot()
  })

  it('should render the heading', () => {
    render(<Games />)

    expect(screen.getByRole('heading', { name: /Games/i })).toBeInTheDocument()
  })
})
