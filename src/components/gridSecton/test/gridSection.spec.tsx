import { render } from '@testing-library/react';
import GridSection from '..';
import { mock } from '../mock';

describe('<GridSection />', () => {
  it('text on screen', () => {
    const { getByRole } = render(
      <GridSection
        TitleText={mock.TitleText}
        background={true}
        descriptionP={mock.descriptionP}
        grid={mock.grid}
      ></GridSection>,
    );
    expect(getByRole('heading', { name: mock.TitleText })).toBeInTheDocument();
  });
  it('when element grid have the on screen', () => {
    const { queryAllByRole } = render(
      <GridSection
        TitleText={mock.TitleText}
        background={true}
        descriptionP={mock.descriptionP}
        grid={mock.grid}
      ></GridSection>,
    );
    expect(queryAllByRole('heading', { name: mock.grid[0].Title })).toHaveLength(mock.grid.length);
  });
});
