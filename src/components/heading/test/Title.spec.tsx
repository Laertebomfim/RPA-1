import { render, screen } from '@testing-library/react';
import Title from '../Title';

describe('<Title/>', () => {
  it('he is a H1', () => {
    render(
      <Title type="h1" color={true} size="medium" TitleCase={false}>
        test
      </Title>,
    );

    const elementTitle = screen.getByRole('heading', { name: /test/i });

    expect(elementTitle.nodeName).toBe('H1');
  });

  it('text witch the color rgb(255, 255, 255)', () => {
    render(
      <Title type="h1" color={true} size="medium" TitleCase={false}>
        test
      </Title>,
    );

    const elementTitle = screen.getByRole('heading', { name: /test/i });

    expect(elementTitle).toHaveClass('text-white');
  });
  it('its size must is font-size: 2.25rem ', () => {
    render(
      <Title type="h1" color={true} size="medium" TitleCase={false}>
        test
      </Title>,
    );
    const elementTitle = screen.getByRole('heading', { name: /test/i });
    expect(elementTitle).toHaveClass('text-4xl');
  });

  it('the style must is uppercase', () => {
    render(
      <Title type="h1" color={true} size="medium" TitleCase={true}>
        test
      </Title>,
    );
    const elementTitle = screen.getByRole('heading', { name: /test/i });
    expect(elementTitle).toHaveClass('uppercase');
  });
});
