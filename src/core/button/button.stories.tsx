import type { StoryObj, Meta } from '@storybook/react'

import { fn } from '@storybook/test'

import Button from '.'

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
  component: Button,
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
  title: 'Core/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const ButtonStory: Story = {
  args: {
    asChild: false,
    group: 'normal',
    size: 'sm',
    variant: 'brand',
  },

  name: 'Button',
  render: ({ ...args }) => (
    <Button {...args}>
      {!args.asChild ? 'Button' : <span>Using child element as Button</span>}
    </Button>
  ),
}
