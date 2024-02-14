import { Meta, StoryObj } from '@storybook/react';
import Logo from './Logo';

const meta: Meta<typeof Logo> = {
  component: Logo,
};
export default meta;
type stoty = StoryObj<typeof Logo>;

export const Primary: stoty = {
  args: {
    img: 'https://raw.githubusercontent.com/luizomf/curso-reactjs-nextjs-project-3/df9710798d0c759f1d4e1a82a374791fbbdd92a2/public/assets/images/logo.svg',
    link: '',
    text: 'logolink',
  },
};
export const secund: stoty = {
  args: {
    img: '',
    link: '',
    text: 'logolink',
  },
};
