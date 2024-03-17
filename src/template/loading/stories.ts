import type { Meta, StoryObj } from '@storybook/react';
import Loading from './Loading';

const meta: Meta<typeof Loading> = {
  component: Loading,
  title: 'template/loading/Loading',
};

export default meta;
type story = StoryObj<typeof Loading>;

export const Primary: story = {
  args: {},
};
