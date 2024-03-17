import { footerMock } from '../footer_mock';
import mapFooter from '../map_footer';

describe('map footer', () => {
  it('case the data be received, he must with have the value', () => {
    const data = mapFooter(footerMock);
    expect(data.text).toBe(`<b>hello</b>`);
  });
});
