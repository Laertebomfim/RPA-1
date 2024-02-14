import { render } from '@testing-library/react';
import Logo from '../Logo';

describe('<Lobo/>', () => {
  it('mast display an component img', () => {
    const { getByRole } = render(<Logo img="asserts/logo.svg" link="" text="logolink" />);
    expect(getByRole('img', { name: /logolink/i })).toHaveAttribute('src', 'asserts/logo.svg');
  });

  it('not mast display an component img', () => {
    const { queryByRole } = render(<Logo img="" link="" text="logolink" />);
    expect(queryByRole('img')).toBe(null);
    expect(queryByRole('heading', { name: /logolink/i })).toBeInTheDocument();
    expect.assertions(2);
  });

  it('element <a/> whit href equal the "#home"', () => {
    const { getByRole } = render(<Logo img="" link="#home" text="logolink" />);
    expect(getByRole('link', { name: /logolink/i })).toHaveAttribute('href', '#home');
  });
});
