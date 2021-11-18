import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  height: 100vh;
`

export const BannerBlock = styled.div`
  width: 50%;
  height: 100%;
  padding: 40px;
`

export const Subtitle = styled.h3``

export const Footer = styled.footer``

export const Content = styled.div`
  width: 50%;
  height: 100%;
  padding: 40px;
  ${({ theme }) => css`
    background-color: ${theme.colors.lightBg};
  `}
`
