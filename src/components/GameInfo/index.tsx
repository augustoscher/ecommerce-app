import * as S from './styles'

export type GameInfoProps = {
  title: string
  description: string
  price: string
}
const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <h1>GameInfo</h1>
  </S.Wrapper>
)

export default GameInfo
