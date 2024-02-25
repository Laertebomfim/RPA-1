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
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eius blanditiis quam aliquid? Iure qui temporibus, quam molestiae explicabo tenetur corrupti sunt vel, delectus in animi debitis cum earum soluta.',
  },
};
