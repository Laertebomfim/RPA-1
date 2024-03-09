import type { Meta, StoryObj } from '@storybook/react';
import TopButton from './index';

const meta: Meta<typeof TopButton> = {
  component: TopButton,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export default meta;
type story = StoryObj<typeof TopButton>;

export const Primary: story = {
  args: {
    background: true,
  },
};
