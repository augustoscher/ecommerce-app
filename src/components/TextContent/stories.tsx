import { Story, Meta } from '@storybook/react/types-6-0'
import TextContent, { TextContentProps } from '.'
import data from './mock'

export default {
  title: 'TextContent',
  component: TextContent,
  args: data,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Usage: Story<TextContentProps> = (args) => (
  <TextContent {...args} />
)
