import { fireEvent, render } from '@testing-library/react';
import HeadingMenu from '../Index';
import { Mock } from '@/components/Nav/mock';

const mockData = [Mock[0]];
describe('<HeadingMenu/>', () => {
  it('create an Snapshot', () => {
    const { container } = render(<HeadingMenu information={mockData} img="" link="" text="logo" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('most stat with menu-infor invisible to mobile', () => {
    const { getByLabelText } = render(
      <HeadingMenu information={mockData} img="" link="" text="logo" />,
    );
    expect(getByLabelText(/menu-infor/i)).toHaveClass('hidden opacity-0');
  });
  it('when he for clicking menu-infor most is visible', () => {
    const { getByLabelText } = render(
      <HeadingMenu information={mockData} img="" link="" text="logo" />,
    );
    fireEvent.click(getByLabelText(/menu-mobile/i));

    expect(getByLabelText(/menu-infor/i)).not.toHaveClass('hidden opacity-0');

    fireEvent.click(getByLabelText(/menu-mobile/i));
    expect(getByLabelText(/menu-infor/i)).toHaveClass('hidden opacity-0');
  });
  it('when clicked it hides the menu', () => {
    const { getByRole, getByLabelText } = render(
      <HeadingMenu information={mockData} img="" link="" text="logo" />,
    );
    fireEvent.click(getByLabelText(/menu-mobile/i));
    fireEvent.click(getByRole('article'));
    expect(getByLabelText(/menu-infor/i)).toHaveClass('hidden opacity-0');
  });
});
