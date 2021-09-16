import { Story, Meta } from '@storybook/react/types-6-0'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const DefaultUsage: Story<HeadingProps> = (args) => <Heading {...args} />

DefaultUsage.args = {
  children: 'Most Populars',
  color: 'black'
}
