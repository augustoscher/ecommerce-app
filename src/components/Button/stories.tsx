import { Story, Meta } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const DefaultUsage: Story = (args) => <Button size="medium" {...args} />

DefaultUsage.args = {
  children: 'Buy now'
}

export const WithIcon: Story = (args) => <Button {...args} />

WithIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
}

export const LinkUsage: Story = (args) => <Button {...args} />

LinkUsage.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link'
}
