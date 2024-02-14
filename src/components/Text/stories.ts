import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta: Meta<typeof Text> = {
  component: Text,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export default meta;
type story = StoryObj<typeof Text>;

export const Primary: story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eius blanditiis quam aliquid? Iure qui temporibus, quam molestiae explicabo tenetur corrupti sunt vel, delectus in animi debitis cum earum soluta.',
  },
};
