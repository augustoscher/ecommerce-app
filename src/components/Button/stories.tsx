import { Story, Meta } from '@storybook/react/types-6-0'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const DefaultUsage: Story = (args) => <Button size="medium" {...args} />

DefaultUsage.args = {
  children: 'Buy now'
}
