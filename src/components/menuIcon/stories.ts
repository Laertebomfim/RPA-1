import { Meta, StoryObj } from '@storybook/react';
import Icon from '.';

const meta: Meta<typeof Icon> = {
  component: Icon,
};

export default meta;
type story = StoryObj<typeof Icon>;

export const Primary: story = {
  args: {
    close_Open_boolean: false,
  },
};
