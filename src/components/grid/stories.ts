import { Meta, StoryObj } from '@storybook/react';
import GridComponent from '.';

const meta: Meta<typeof GridComponent> = {
  component: GridComponent,
};

export default meta;
type story = StoryObj<typeof GridComponent>;

export const Primary: story = {
  args: {
    background: true,
    textP:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ipsum earum maxime, molestias numquam quos! Nesciunt fuga ex cum quibusdam inventore ratione laborum esse rem consectetur, autem porro voluptatibus placeat?',
    textTitle: 'voluptatibus placeat',
    img: 'https://hermes.dio.me/articles/cover/9706f214-6e23-4198-baa8-fcdd03589577.jpg',
  },
};
