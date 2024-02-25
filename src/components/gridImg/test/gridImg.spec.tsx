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
        gridImg={mock.gridImg}
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
        gridImg={mock.gridImg}
      ></GridSection>,
    );
    expect(queryAllByRole('img', { name: mock.gridImg[0].TitleAlt })).toHaveLength(
      mock.gridImg.length,
    );
  });
});
