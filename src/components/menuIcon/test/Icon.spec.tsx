import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Icon from '..';
import { useState } from 'react';

const ComponentMock = () => {
  const [testBoolean, setTestBoolean] = useState<boolean>(false);
  return <Icon close_Open_func={setTestBoolean} close_Open_boolean={testBoolean} />;
};

describe('<Icon/>', () => {
  it('start with icon open-menu ', () => {
    const { getByLabelText } = render(<ComponentMock />);
    expect(getByLabelText(/open-menu/i)).toBeInTheDocument();
  });

  it('click in the icon change to icon-close', async () => {
    const { findByLabelText, getByRole } = render(<ComponentMock />);
    userEvent.click(getByRole('generic', { name: /menu-mobile/i }));
    const icon = await findByLabelText(/close-menu/i);
    expect(icon).toBeInTheDocument();
  });

  it('create an Snapshot ', () => {
    const { container } = render(<ComponentMock />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
