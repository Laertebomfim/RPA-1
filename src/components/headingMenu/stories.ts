import { Meta, StoryObj } from '@storybook/react';
import HeadingMenu from './Index';
import { Mock } from '../Nav/mock';

const meta: Meta<typeof HeadingMenu> = {
  component: HeadingMenu,
};
export default meta;
type story = StoryObj<typeof HeadingMenu>;

export const Primary: story = {
  args: {
    information: Mock,
    img: '',
    link: '',
    text: 'logo',
  },
};
