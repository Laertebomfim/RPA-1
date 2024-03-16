import mapSection, {
  mapSectionContent,
  mapSectionGridImg,
  mapSectionGridText,
  mapSectionTowColumns,
} from '../map-section';
import {
  SectionContentMock,
  SectionTowColumnsMock,
  sectionGridImgMock,
  sectionGridTextMock,
  sectionMock,
} from '../mock-section';

describe('map-section', () => {
  it('he must return an array of length 4 object', () => {
    const data = mapSection(sectionMock);
    expect(data).toHaveLength(4);
  });

  it('return on the mapSectionTowColumns, must have valuer correct', () => {
    const data = mapSectionTowColumns(SectionTowColumnsMock);
    expect(data.description).toBe('To wrap up January, we are proud to bring you the release');
    expect(data.title).toBe('JANUARY BRINGS');
    expect(data.img).toBe('hello.svg');
    expect(data.metadata.backgroud).toBe(true);
    expect(data.metadata.id_title).toBe('JANUARY');
  });

  it('return on the mapSectionContent, must have valuer correct', () => {
    const data = mapSectionContent(SectionContentMock);
    expect(data.title).toBe('NEWS COVERAGE');
    expect(data.decryption).toHaveLength(5);
    expect(data.urlHead).toBe('NEWS-COVERAGE-AND-SOME-SURPRISES');
    expect(data.background).toBe(false);
  });

  it('return on the mapSectionGridText, must have valuer correct', () => {
    const data = mapSectionGridText(sectionGridTextMock);
    expect(data.title).toBe('MY GRID');
    expect(data.decryption).toBe('Uma breve descrição.');
    expect(data.urlHead).toBe('MY-GRID');
    expect(data.background).toBe(true);
    expect(data.text_grid.every((e) => !e.title && !e.descricao));
    expect(data.img_url).toBe('hello.jpg');
  });

  it('return on the mapSectionGridImg, must have valuer correct', () => {
    const data = mapSectionGridImg(sectionGridImgMock);
    expect(data.title).toBe('GALLERY');
    expect(data.decryption).toBe('Uma breve descrição.');
    expect(data.urlHead).toBe('GALLERY');
    expect(data.background).toBe(false);
    expect(data.img.every((e: any) => e.url === 'hi.jpg'));
    expect(data.img.every((e: any) => e.altText === 'imagem-GALLERY'));
  });
});
