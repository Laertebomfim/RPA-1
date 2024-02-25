import { Meta, StoryObj } from '@storybook/react';
import GridImg from '.';
import { mock } from './mock';

const meta: Meta<typeof GridImg> = {
  component: GridImg,
};
export default meta;

type story = StoryObj<typeof GridImg>;

export const Primari: story = {
  args: mock,
};
