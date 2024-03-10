import { render } from '@testing-library/react';
import Base from '.';
import { mock } from './mock';

describe('<Base/>', () => {
  it('cleat a snapshot', () => {
    const {} = render(
      <Base {...mock}>
        <p> hi test</p>
      </Base>,
    );
    // expect(container.firstChild).toMatchInlineSnapshot()
  });
});
