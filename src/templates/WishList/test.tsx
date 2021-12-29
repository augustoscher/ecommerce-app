import { render, screen } from '@testing-library/react'

import WishList from './index'

describe('<WishList />', () => {
  it('match snapshot', () => {
    const { container } = render(<WishList />)

    expect(container).toMatchSnapshot()
  })

  it('should render the heading', () => {
    render(<WishList />)

    expect(
      screen.getByRole('heading', { name: /WishList/i })
    ).toBeInTheDocument()
  })
})
