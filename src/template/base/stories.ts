import { Meta, StoryObj } from '@storybook/react';
import Base from '.';
import { mock } from './mock';

const meta: Meta<typeof Base> = {
  title: 'template/Base/Base',
  component: Base,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
export default meta;
type story = StoryObj<typeof Base>;

export const primary: story = {
  args: mock,
};
