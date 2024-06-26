import { render } from '@testing-library/react';
import TopButton from '..';

describe('<TopButton/>', () => {
  it('icon on screen', () => {
    const { getByRole } = render(<TopButton background={true} />);
    expect(getByRole('link', { name: 'navigate on top' }));
  });
});
