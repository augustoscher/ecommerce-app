import { Story, Meta } from '@storybook/react/types-6-0'
import Menu from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const MobileUsage: Story = () => <Menu />

MobileUsage.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}

export const DesktopUsage: Story = () => <Menu />
