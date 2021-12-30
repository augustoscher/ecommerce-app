import styled, { css } from 'styled-components'

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    margin: ${theme.spacings.medium} 0;
    /* 250px tamanho minimo e 1fr tamanho máximo */
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    grid-gap: ${theme.spacings.medium};
  `}
`
