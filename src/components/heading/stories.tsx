import type { Meta, StoryObj } from '@storybook/react';
import Title from './Title';

const meta: Meta<typeof Title> = {
  component: Title,
};

export default meta;

type Story = StoryObj<typeof Title>;

export const FirstStory: Story = {
  args: {
    color: true,
    size: 'big',
    type: 'h1',
    TitleCase: true,
    children: '',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
export const secundStory: Story = {
  args: {
    color: false,
    size: 'medium',
    type: 'h3',
    TitleCase: false,
    children: '',
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};
