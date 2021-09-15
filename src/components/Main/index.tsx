import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript. ReactJS, NextJS e StyledComponents'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um atomo e React Avançado escrito ao lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Ilustration
      src="/img/hero-illustration.svg"
      alt="Desenvolvedor sentado na cadeira de frente para a tela"
    />
  </S.Wrapper>
)

export default Main
