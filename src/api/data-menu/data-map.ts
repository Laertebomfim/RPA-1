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
export type returnDataType = {
  footerHtml: {
    text: string;
  };
  slug: string;
  title: string;
  sections: [
    {
      title: string;
      description: string;
      img: string;
      metadata: {
        id: number;
        id_title: string;
        backgroud: boolean;
      };
    },
    {
      title: string;
      decryption: string[];
      urlHead: string;
      background: boolean;
      Table: any;
    },
    {
      title: string;
      decryption: string;
      urlHead: string;
      background: boolean;
      text_grid: {
        Title: string;
        description: string;
      }[];
      img_url: string;
    },
    {
      title: string;
      decryption: string;
      urlHead: string;
      background: boolean;
      img: {
        srcImg: string;
        TitleAlt: string;
      }[];
    },
    {
      title: string;
      decryption: string;
      urlHead: string;
      background: boolean;
      text_grid: {
        Title: string;
        description: string;
      }[];
      img_url: string;
    },
    {
      title: string;
      decryption: string[];
      urlHead: string;
      background: boolean;
      Table: any;
    },
  ];
  menu: {
    newTab: boolean;
    text: string;
    img: string;
    link: string;
    links: {
      children: string;
      http: string;
      newTab: string;
    }[];
  };
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
