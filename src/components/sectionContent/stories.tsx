import { Meta, StoryObj } from '@storybook/react';
import SectionContent from './Section';
import Title from '../heading/Title';

const meta: Meta<typeof SectionContent> = {
  component: SectionContent,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export default meta;
type story = StoryObj<typeof SectionContent>;

export const Primary: story = {
  args: {
    backgroundBoolean: true,
    children: (
      <div>
        <Title TitleCase={false} color={false} size="medium" type="h1">
          In quibusdam
        </Title>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, qui. In quibusdam molestiae
        est at totam blanditiis. Ipsam praesentium omnis, quasi error tempora eum saepe. Harum
        fugiat repudiandae atque est?
      </div>
    ),
  },
};

export const Secund: story = {
  args: {
    backgroundBoolean: false,
    children: (
      <div>
        <Title TitleCase={false} color={true} size="medium" type="h1">
          In quibusdam
        </Title>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, qui. In quibusdam molestiae
        est at totam blanditiis. Ipsam praesentium omnis, quasi error tempora eum saepe. Harum
        fugiat repudiandae atque est?
      </div>
    ),
  },
};
