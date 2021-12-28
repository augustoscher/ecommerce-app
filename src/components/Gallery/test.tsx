import { render, screen } from '@testing-library/react'

import Gallery, { GalleryProps } from './index'

// const data: GalleryProps[] = [{}]

describe('<Gallery />', () => {
  it('match snapshot', () => {
    const { container } = render(<Gallery />)

    expect(container).toMatchSnapshot()
  })

  it('should render the heading', () => {
    render(<Gallery />)

    expect(
      screen.getByRole('heading', { name: /Gallery/i })
    ).toBeInTheDocument()
  })
})
