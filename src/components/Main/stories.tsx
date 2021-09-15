import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'default title for every storie',
    description: 'default description for every storie'
  }
} as Meta

export const Usage: Story = (args) => <Main {...args} />

export const SecondaryUsage: Story = (args) => <Main {...args} />
SecondaryUsage.args = {
  title: 'React Avançado 2',
  description: 'TypeScript, ReactJS, NextJS 2'
}
