import { mockMenu } from '@/api/manu-map/mock-menu';
import { dataMap } from '../data-map';
import { sectionMock } from '@/api/map-section/mock-section';
import { footerMock } from '@/api/map-footer/footer_mock';

const mock = {
  footer: footerMock,
  slug: 'text',
  title: 'hello',
  section: sectionMock,
  menu: mockMenu,
};
describe('data-map', () => {
  it('deve mapear um array de dados mesmo vazio ', () => {
    const pagesData = dataMap(mock);

    expect(typeof pagesData.footerHtml.text).toBe('string');
    expect(typeof pagesData.slug).toBe('string');
    expect(typeof pagesData.title).toBe('string');
    expect(typeof pagesData.menu).toEqual('object');
    expect(Array.isArray(pagesData.sections)).toEqual(true);
  });

  it('as informações que forem passadas devem ser retornadas', () => {
    const pagesData = dataMap(mock);
    expect(pagesData.footerHtml.text).toBe(`<b>hello</b>`);
    expect(pagesData.title).toBe('hello');
    expect(pagesData.slug).toBe('text');
    expect(pagesData.sections).toHaveLength(4);
    expect(typeof pagesData.menu).toBe('object');
  });
});
