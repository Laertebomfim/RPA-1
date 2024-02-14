import { render } from '@testing-library/react';
import Home from '../page';

describe('<Home />', () => {
  it('render the component father', () => {
    render(<Home />);
  });
});
