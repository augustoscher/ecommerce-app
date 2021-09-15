import { render, screen } from '@testing-library/react'

import Main from './index'

describe('<Main />', () => {
  it('match snapshot', () => {
    const { container } = render(<Main />)

    expect(container).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })

  it('should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
  })
})
