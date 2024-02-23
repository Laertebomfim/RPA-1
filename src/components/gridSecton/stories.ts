import { Meta, StoryObj } from '@storybook/react';
import GridSection from '.';
import { mock } from './mock';

const meta: Meta<typeof GridSection> = {
  component: GridSection,
};
export default meta;

type story = StoryObj<typeof GridSection>;

export const Primari: story = {
  args: mock,
};
