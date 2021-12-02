import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSignIn />)
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Sign in now/i })
    ).toBeInTheDocument()
  })

  // it('should render the forgot password link', () => {})

  it('should render the text and link to sign up', () => {
    // text
    // link
  })
})
