import { dataMap } from '../data-map';

const mock = [
  {
    footerHtml: `<div><b>hello</b></div>`,
    slug: 'text',
    title: 'hello',
    sections: ['', '', ''],
    menu: { test: '' },
  },
];
describe('data-map', () => {
  it('deve mapear um array de dados mesmo vazio ', () => {
    const pagesData = dataMap(mock);

    expect(typeof pagesData.footerHtml).toBe('string');
    expect(typeof pagesData.slug).toBe('string');
    expect(typeof pagesData.title).toBe('string');
    expect(typeof pagesData.menu).toEqual('object');
    expect(Array.isArray(pagesData.sections)).toEqual(true);
  });

  it('as informações que forem passadas devem ser retornadas', () => {
    const pagesData = dataMap(mock);
    expect(pagesData.footerHtml).toBe(`<div><b>hello</b></div>`);
    expect(pagesData.title).toBe('hello');
    expect(pagesData.slug).toBe('text');
    expect(pagesData.sections).toEqual(['', '', '']);
    expect(pagesData.menu).toEqual({ test: '' });
  });
});
