import { InputHTMLAttributes } from 'react'
import * as S from './styles'

export type RadioProps = {
  name?: string
  value?: string
} & InputHTMLAttributes<HTMLInputElement> //let pass by props other properties of input

const Radio = ({ name, value = '', ...props }: RadioProps) => (
  <S.Wrapper>
    <S.Input type="radio" name={name} value={value} {...props} />
  </S.Wrapper>
)

export default Radio
