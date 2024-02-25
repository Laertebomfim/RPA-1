import { render } from '@testing-library/react';
import Footer from '../index';
describe('<Footer/>', () => {
  it('display component of string', () => {
    const { getByRole } = render(<Footer background={true} text={`<h1>oi</h1>`}></Footer>);
    expect(getByRole('heading', { name: 'oi' })).toBeInTheDocument();
  });
});
