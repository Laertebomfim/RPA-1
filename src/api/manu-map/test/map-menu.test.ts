import mapMenu from '../map-menu';
import { mockMenu } from '../mock-menu';

describe('map-menu', () => {
  it('dados que eu quero que ele me retorne', () => {
    const dataMenu = mapMenu(mockMenu);
    expect(dataMenu.newTab).toBe(false);
    expect(dataMenu.text).toBe('LOGO');
    expect(dataMenu.link).toBe('#home');
    expect(dataMenu.img).toBe('cloudinary.svg');
    expect(dataMenu.links).toHaveLength(6);
  });
  it('dados que link devem ter ', () => {
    const dataMenu = mapMenu(mockMenu);

    expect(dataMenu.links[0].children).toBe('intro');
    expect(dataMenu.links[0].http).toBe('#intro');
    expect(dataMenu.links[0].newtab).toBe(false);
  });
});
