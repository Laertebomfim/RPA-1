import { render, screen } from '@testing-library/react';
import Text from '../Text';

describe('<Text/>', () => {
  it('component is with style pattern', () => {
    const { getByText } = render(<Text>text</Text>);
    const paragraph = getByText('text');
    expect(paragraph).toHaveClass('text-white font-open_Sans text-base font-normal');
  });
  it('the color have to is white or black', () => {
    const { rerender } = render(<Text colorBool={true}>text</Text>);
    // style color white
    const paragraphWhite = screen.getByText(/text/i);
    expect(paragraphWhite).toHaveClass('text-white');

    rerender(<Text colorBool={false}>text</Text>);

    // style color black
    const paragraphBlack = screen.getByText('text');
    expect(paragraphBlack).toHaveClass('text-black');
  });

  it('have to is Montserrat or Open Sans', () => {
    expect.assertions(2);
    const { rerender } = render(<Text fontFamily="Montserrat">text</Text>);
    //font Montserrat
    const paragraphMontserrat = screen.getByText('text');
    expect(paragraphMontserrat).toHaveClass('font-montserrat');

    rerender(<Text fontFamily="Open_Sans">text</Text>);
    const paragraphOpenSans = screen.getByText('text');
    expect(paragraphOpenSans).toHaveClass('font-open_Sans');
  });

  it('size base | lg | xl', () => {
    const { rerender } = render(<Text size="base">text</Text>);

    // size base
    const paragraphBase = screen.getByText('text');
    expect(paragraphBase).toHaveClass('text-base');

    // size lg
    rerender(<Text size="lg">text</Text>);
    const paragraphlg = screen.getByText('text');
    expect(paragraphlg).toHaveClass('text-lg');

    // size xl
    rerender(<Text size="xl">text</Text>);
    const paragraphxl = screen.getByText('text');
    expect(paragraphxl).toHaveClass('text-xl');
    expect.assertions(3);
  });

  it('waight have to is normal | semibold | bold', () => {
    const { rerender } = render(<Text weight="normal">text</Text>);

    // weight normal
    const paragraphNormal = screen.getByText('text');
    expect(paragraphNormal).toHaveClass('font-normal');

    // weight semibold
    rerender(<Text weight="semibold">text</Text>);
    const paragraphSemibold = screen.getByText('text');
    expect(paragraphSemibold).toHaveClass('font-semibold');

    // weight bold
    rerender(<Text weight="bold">text</Text>);
    const paragraphBold = screen.getByText('text');
    expect(paragraphBold).toHaveClass('font-bold');

    expect.assertions(3);
  });
  it('create an Snapshot', () => {
    const { container } = render(<Text weight="normal">text</Text>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
