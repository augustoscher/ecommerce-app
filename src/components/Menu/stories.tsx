import { Story, Meta } from '@storybook/react/types-6-0'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const MobileDefault: Story<MenuProps> = (args) => <Menu {...args} />

MobileDefault.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  },
  viewport: {
    defaultViewport: 'mobile1'
  }
}

export const DesktopDefault: Story<MenuProps> = (args) => <Menu {...args} />

DesktopDefault.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  }
}
