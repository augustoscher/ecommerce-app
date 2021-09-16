import { Story, Meta } from '@storybook/react/types-6-0'
import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo
} as Meta

export const DefaultUsage: Story<LogoProps> = (args) => <Logo {...args} />
