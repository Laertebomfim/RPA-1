import { render } from '@testing-library/react';
import GridComponent from '..';
describe('<GridComponent/>', () => {
  it('component is screen', () => {
    const { getByRole } = render(
      <GridComponent
        TitleCase={true}
        color={true}
        size="medium"
        type="h1"
        background={true}
        img="public/asserts/logo.svg"
        textP="test conponet"
      >
        test
      </GridComponent>,
    );
    expect(getByRole('heading', { name: /test/i })).toBeInTheDocument();
    expect(getByRole('img')).toHaveAttribute('src', 'public/asserts/logo.svg');
    expect.assertions(2);
  });
});
