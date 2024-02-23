import { Meta, StoryObj } from '@storybook/react';
import GridText from '.';
import { mock } from './mock';

const meta: Meta<typeof GridText> = {
  component: GridText,
};
export default meta;

type story = StoryObj<typeof GridText>;

export const Primari: story = {
  args: mock,
};
