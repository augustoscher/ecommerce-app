import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import * as S from './styles'

export type ItemProps = {
  title: string
  name: string
  type: string
  fields: Field[]
}

type Field = {
  label: string
  name: string
}

type Values = {
  [field: string]: boolean | string
}

export type ExploreSidebarProps = {
  items: ItemProps[]
  initialValues?: Values
  onFilter: (values: Values) => void
}

const ExploreSidebar = ({
  items,
  onFilter,
  initialValues = {}
}: ExploreSidebarProps) => {
  return (
    <S.Wrapper>
      <Heading lineBottom lineColor="secondary" size="small">
        Price
      </Heading>

      <Checkbox name="under-50" label="Under $50" />
      <Checkbox name="under-100" label="Under $100" />
      <Checkbox name="under-150" label="Under $150" />
      <Checkbox name="under-200" label="Under $200" />
      <Checkbox name="free" label="Free" />
      <Checkbox name="discounted" label="Discounted" />

      <Heading lineBottom lineColor="secondary" size="small">
        Sort by
      </Heading>

      <Radio
        id="high-to-low"
        name="sort-by"
        label="High to low"
        labelFor="check"
      />
      <Radio
        id="low-to-high"
        name="sort-by"
        label="Low to high"
        labelFor="check"
        value="l"
      />

      <Heading lineBottom lineColor="secondary" size="small">
        System
      </Heading>

      <Checkbox name="windows" label="Windows" />
      <Checkbox name="mac" label="Mac" />
      <Checkbox name="linux" label="Linux" />

      <Heading lineBottom lineColor="secondary" size="small">
        Genre
      </Heading>

      <Checkbox name="action" label="Action" />
      <Checkbox name="action" label="Action" />
      <Checkbox name="action" label="Action" />
      <Checkbox name="action" label="Action" />
      <Checkbox name="action" label="Action" />
      <Checkbox name="action" label="Action" />
    </S.Wrapper>
  )
}

export default ExploreSidebar
