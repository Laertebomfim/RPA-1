/* eslint-disable no-unused-vars */
import { render, screen } from '@testing-library/react';
import Title from '../Title';
import { ReactElement } from 'react';

type RerenderTyps = (
  rerender: (element: ReactElement) => void,
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  color?: boolean,
  size?: 'big' | 'small' | 'medium',
  TitleCase?: boolean,
) => void;

const Rerender: RerenderTyps = (
  alterRerender,
  type = 'h1',
  color = true,
  size = 'medium',
  TitleCase = true,
) => {
  alterRerender(
    <Title type={type} color={color} size={size} TitleCase={TitleCase}>
      test
    </Title>,
  );
};
describe('<Title/>', () => {
  it('he is a H1 | H2 | H3 | H4 | H5 | H6', () => {
    // title h1

    const { rerender } = render(
      <Title type="h1" color={true} size="medium" TitleCase={false}>
        test
      </Title>,
    );

    const elementH1 = screen.getByRole('heading', { name: /test/i });
    expect(elementH1.nodeName).toBe('H1');

    // title h2

    Rerender(rerender, 'h2');
    const elementH2 = screen.getByRole('heading', { name: /test/i });
    expect(elementH2.nodeName).toBe('H2');

    // title h3

    Rerender(rerender, 'h3');
    const elementH3 = screen.getByRole('heading', { name: /test/i });
    expect(elementH3.nodeName).toBe('H3');

    // title h4

    Rerender(rerender, 'h4');
    const elementH4 = screen.getByRole('heading', { name: /test/i });
    expect(elementH4.nodeName).toBe('H4');

    // title h5

    Rerender(rerender, 'h5');
    const elementH5 = screen.getByRole('heading', { name: /test/i });
    expect(elementH5.nodeName).toBe('H5');

    // title h6

    Rerender(rerender, 'h6');
    const elementH6 = screen.getByRole('heading', { name: /test/i });
    expect(elementH6.nodeName).toBe('H6');
  });

  it('text with the color white or black', () => {
    const { rerender } = render(
      <Title type="h1" color={true} size="medium" TitleCase={false}>
        test
      </Title>,
    );

    // text white

    const elementTitleWhite = screen.getByRole('heading', { name: /test/i });
    expect(elementTitleWhite).toHaveClass('text-white');

    // text black

    Rerender(rerender, undefined, false);
    const elementTitleBlack = screen.getByRole('heading', { name: /test/i });
    expect(elementTitleBlack).toHaveClass('text-black');
  });
  it('its size must is font-size: 2xl | 3xl | 4xl ', () => {
    const { rerender } = render(
      <Title type="h1" color={true} size="small" TitleCase={false}>
        test
      </Title>,
    );

    // title 2xl

    const elementTitleSmall = screen.getByRole('heading', { name: /test/i });
    expect(elementTitleSmall).toHaveClass('text-2xl');

    // title 3xl

    Rerender(rerender, 'h1', true, 'medium');
    const elementTitleMedium = screen.getByRole('heading', { name: /test/i });
    expect(elementTitleMedium).toHaveClass('text-3xl');

    // title 5xl

    Rerender(rerender, 'h1', true, 'big');
    const elementTitleBig = screen.getByRole('heading', { name: /test/i });
    expect(elementTitleBig).toHaveClass('md:text-5xl');
  });

  it('the style must to is uppercase | lowercase', () => {
    const { rerender } = render(
      <Title type="h1" color={true} size="medium" TitleCase={true}>
        test
      </Title>,
    );
    // title uppercase
    const elementTitleUppercase = screen.getByRole('heading', { name: /test/i });
    expect(elementTitleUppercase).toHaveClass('uppercase');

    // title lowercase

    Rerender(rerender, 'h1', true, 'big', false);
    const elementTitleLowercase = screen.getByRole('heading', { name: /test/i });
    expect(elementTitleLowercase).toHaveClass('lowercase');
  });
});
