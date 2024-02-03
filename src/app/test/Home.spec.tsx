import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('<Home />', () => {
  it('render the component father', () => {
    const { container } = render(<Home />);
    screen.debug(container.firstChild as HTMLElement | undefined);
    // const heading = screen.getByRole('heading', { level: 1 });
    expect(container.firstChild).toHaveStyle({
      'background-color': '#fff',
    });
  });
});
