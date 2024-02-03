import type { Meta, StoryObj } from '@storybook/react';
import Title from './Title';

const meta: Meta<typeof Title> = {
  component: Title,
};

export default meta;

type Story = StoryObj<typeof Title>;

export const FirstStory: Story = {
  args: {
    text: 'hello',
    color: true,
    size: 'big',
    type: 'h1',
    TitleCase: true,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
export const secundStory: Story = {
  args: {
    text: 'hello2',
    color: false,
    size: 'medium',
    type: 'h3',
    TitleCase: false,
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};
