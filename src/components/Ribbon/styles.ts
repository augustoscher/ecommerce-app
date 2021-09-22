import styled, { css, DefaultTheme } from 'styled-components'
import { RibbonColors, RibbonProps, RibbonSizes } from '.'

const wrapperModifier = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};
  `,

  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    height: 3.6rem;
  `,

  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    height: 2.6rem;
  `
}

export const Wrapper = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, color, size }) => css`
    ${!!size && wrapperModifier[size](theme)}
    ${!!color && wrapperModifier.color(theme, color)}
  `}
`
