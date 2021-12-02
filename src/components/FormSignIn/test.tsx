import { render, screen } from '@testing-library/react'

import FormSignIn from './index'

describe('<FormSignIn />', () => {
  it('match snapshot', () => {
    const { container } = render(<FormSignIn />)

    expect(container).toMatchSnapshot()
  })

  it('should render the heading', () => {
    render(<FormSignIn />)

    expect(
      screen.getByRole('heading', { name: /FormSignIn/i })
    ).toBeInTheDocument()
  })
})
