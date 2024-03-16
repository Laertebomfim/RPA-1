import mapMenu from '../manu-map/map-menu';
import { menutype } from '../manu-map/type-menu';
import mapSection from '../map-section/map-section';
import { dataSectionType } from '../map-section/type-map-section';

export const dataMap = (
  Data: {
    footerHtml: string;
    slug: string;
    title: string;
    sections: dataSectionType;
    menu: menutype;
  }[],
) => {
  const { footerHtml, menu, sections, slug, title } = Data[0];
  return {
    footerHtml: footerHtml,
    slug: slug,
    title: title,
    sections: mapSection(sections),
    menu: mapMenu(menu),
  };
};
