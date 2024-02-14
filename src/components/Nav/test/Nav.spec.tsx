import { render } from '@testing-library/react';
import Nav from '../Nav';
import { Mock } from '../mock';

describe('<Nav/>', () => {
  it('all element is in the screen', () => {
    const { getAllByRole } = render(<Nav link={Mock}></Nav>);
    const links = getAllByRole('link', { name: /link/i });
    expect(links).toHaveLength(10);
  });
  it('style default', () => {
    const { container } = render(<Nav link={Mock}></Nav>);
    expect(container.firstChild).toHaveClass(
      ' flex flex-col items-center md:flex-wrap md:flex-row bg-white',
    );
  });
});
