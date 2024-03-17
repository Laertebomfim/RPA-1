import mapMenu from '../manu-map/map-menu';
import { menutype } from '../manu-map/type-menu';
import mapFooter, { footerType } from '../map-footer/map_footer';
import mapSection from '../map-section/map-section';
import { dataSectionType } from '../map-section/type-map-section';

export type datatype = {
  footer: footerType;
  slug: string;
  title: string;
  section: dataSectionType;
  menu: menutype;
};

export const dataMap = (Data: datatype) => {
  const { footer, menu, section, slug, title } = Data;
  return {
    footerHtml: mapFooter(footer),
    slug: slug,
    title: title,
    sections: mapSection(section),
    menu: mapMenu(menu),
  };
};
