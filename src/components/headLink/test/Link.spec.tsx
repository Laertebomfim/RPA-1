import { render } from '@testing-library/react';
import LinkComponent from '../Link';

describe('<LinComponent/>', () => {
  it('proprietary http is http://test.com/', () => {
    const { getByRole } = render(<LinkComponent http="http://test.com/">Click</LinkComponent>);
    const componentLink = getByRole('link', { name: /click/i }) as HTMLLinkElement;
    expect(componentLink.href).toBe('http://test.com/');
  });

  it('open at other screen', () => {
    const { getByRole } = render(
      <LinkComponent http="http://test.com/" newtab="_blank">
        Click
      </LinkComponent>,
    );
    const componentLink = getByRole('link', { name: /click/i });
    expect(componentLink).toHaveAttribute('target', '_blank');
  });
});
