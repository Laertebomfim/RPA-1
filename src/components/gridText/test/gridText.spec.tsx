import { render } from '@testing-library/react';
import GridText from '..';
import { mock } from '../mock';

describe('', () => {
  it('component is screen', () => {
    const { container } = render(
      <GridText
        TitleText="my title "
        text={mock.text}
        background={true}
        sectionID="idSection"
        tableComponent={undefined}
      ></GridText>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
