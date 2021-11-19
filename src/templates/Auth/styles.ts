import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
`

export const BannerBlock = styled.div`
  padding: 40px;
  ${({ theme }) => css`
    position: relative;
    background-image: url('/img/auth-bg.jpeg');
    background-size: cover;
    background-position: center center;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${theme.colors.black};
      opacity: 0.85;
    }
  `}
`

export const BannerContent = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    position: relative;
    z-index: ${theme.layers.base};
  `}
`

export const Subtitle = styled.h3``

export const Footer = styled.footer``

export const Content = styled.div`
  padding: 40px;
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`
