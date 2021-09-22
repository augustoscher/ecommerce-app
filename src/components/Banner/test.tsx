import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

describe('<Banner />', () => {
  it('should render correctly', () => {
    renderWithTheme(
      <Banner
        img="https://source.unsplash.com/user/willianjusten/1042x580"
        title="Defy death"
        subtitle="<p>Play the new <strong>CrashLands</strong> season"
        buttonLabel="Buy now"
        buttonLink="/games/defy-death"
      />
    )

    // verifique se o title existe renderizado (.toBeInTheDocument())
    expect(screen.getByText(/Defy death/i)).toBeInTheDocument()
    // verifique se o subtitle existe renderizado
    // expect(screen.getByText(/Defy death/i)).toBeInTheDocument()
    // verifique se a imagem existe renderizado
    expect(screen.getByRole('img', { name: /Defy death/i })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })
})
