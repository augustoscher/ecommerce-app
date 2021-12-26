import { Story, Meta } from '@storybook/react/types-6-0'
import GameInfo from '.'
import data from './mock'

export default {
  title: 'GameInfo',
  component: GameInfo
} as Meta

export const Usage: Story = () => <GameInfo {...data} />
