import { render } from '@testing-library/react';
import SectionContent from './Section';

describe('</>', () => {
  it('mast to possess a First jsx', () => {
    const { container } = render(
      <SectionContent backgroundBoolean={true}>
        <div>test</div>
      </SectionContent>,
    );
    const section = container.firstChild as HTMLSelectElement;
    expect(section.childElementCount).toBe(1);
  });
  it('mast haver background white', () => {
    const { container } = render(
      <SectionContent backgroundBoolean={true}>
        <div>test</div>
      </SectionContent>,
    );
    expect(container.firstChild).toHaveClass('bg-white text-black');
  });
  it('mast haver background black', () => {
    const { container } = render(
      <SectionContent backgroundBoolean={false}>
        <div>test</div>
      </SectionContent>,
    );
    expect(container.firstChild).toHaveClass('bg-black text-white');
  });
});
