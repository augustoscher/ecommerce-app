import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'
import item from './mock'

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...item }
} as Meta

export const DefaultUsage: Story<HighlightProps> = (args) => (
  <Highlight {...args} />
)

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
