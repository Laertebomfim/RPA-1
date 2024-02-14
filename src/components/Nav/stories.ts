import type { Meta, StoryObj } from '@storybook/react';
import Nav from './Nav';
import { Mock } from './mock';
const meta: Meta<typeof Nav> = {
  component: Nav,
};

export default meta;
type story = StoryObj<typeof Nav>;

export const Primary: story = {
  args: {
    link: Mock,
  },
};
