import { Meta, StoryObj } from '@storybook/react';
import Footer from '.';
import { mock } from './mock';

const meta: Meta<typeof Footer> = {
  component: Footer,
};

export default meta;
type story = StoryObj<typeof Footer>;

export const Primary: story = {
  args: mock,
};
