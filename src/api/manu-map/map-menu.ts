import { linkType, menutype } from './type-menu';

export default function mapMenu(menu: menutype) {
  const {
    logo: { img, link_url, text },
    link,
  } = menu;
  return {
    newTab: false,
    text: text,
    img: img.data != null ? img.data.attributes.url : null,
    link: link_url,
    links: mapLink(link),
  };
}

function mapLink(links: linkType) {
  return links.map((elem) => ({
    children: elem.link_text,
    http: elem.link_url,
    newTab: '_self',
  }));
}
