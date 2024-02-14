import type { Meta, StoryObj } from '@storybook/react';
import LinkComponent from './Link';

const meta: Meta<typeof LinkComponent> = {
  component: LinkComponent,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export default meta;
type story = StoryObj<typeof LinkComponent>;

export const Primary: story = {
  args: {
    children: 'click',
    http: 'https://google.com',
  },
};
