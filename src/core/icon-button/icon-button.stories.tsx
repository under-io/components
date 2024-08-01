import type { StoryObj, Meta } from '@storybook/react'

import { RocketIcon } from '@radix-ui/react-icons'
import { fn } from '@storybook/test'

import IconButton from '.'

const meta = {
  args: { onClick: fn() },
  argTypes: {
    asChild: {
      control: { type: 'boolean' },
      description: 'Use child element as Button.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean', required: false },
    },
    group: {
      control: { type: 'radio' },
      description: 'The group type of the button.',
      name: 'group',
      options: ['normal', 'destructive'],
      table: {
        defaultValue: { summary: 'normal' },
        type: { summary: 'string' },
      },
      type: { name: 'string', required: true },
    },
    onClick: {
      action: 'clicked',
      description: 'The action to perform when the button is clicked.',
      table: {
        type: { summary: 'function' },
      },
    },
    size: {
      control: { type: 'radio' },
      description: 'The size of the button.',
      options: ['sm', 'md', 'lg', 'xl'],
      table: {
        defaultValue: { summary: 'md' },
        type: { summary: 'string' },
      },
      type: { name: 'string', required: true },
    },
    variant: {
      control: { type: 'radio' },
      description: 'The variant of the button.',
      name: 'variant',
      options: ['brand', 'secondary', 'tertiary', 'link', 'link-secondary', 'outline'],
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'string' },
      },
      type: { name: 'string', required: true },
    },
  },
  component: IconButton,
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
    docs: {
      controls: {
        sort: 'requiredFirst',
      },
      description: {
        component: 'Displays a button or a component that looks like a button.',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Core/Icon Button',
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const IconButtonStory: Story = {
  args: {
    asChild: false,
    group: 'normal',
    size: 'sm',
    variant: 'brand',
  },

  name: 'Icon Button',
  render: ({ ...args }) => (
    <IconButton {...args}>
      {!args.asChild ? <RocketIcon /> : <span>Using child element as IconButton</span>}
    </IconButton>
  ),
}
