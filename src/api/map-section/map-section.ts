import {
  dataSectionType,
  sectionContent,
  sectionGridImg,
  sectionGridText,
  sectionSobre,
} from './type-map-section';

export default function mapSection(section: dataSectionType) {
  return section.map((ObjectSection) => {
    if (ObjectSection.__component === 'section.section-sobre')
      return mapSectionTowColumns(ObjectSection as sectionSobre);

    if (ObjectSection.__component === 'section.section-texto')
      return mapSectionContent(ObjectSection as unknown as sectionContent);

    if (ObjectSection.title === 'MY GRID')
      return mapSectionGridText(ObjectSection as unknown as sectionGridText);

    if (ObjectSection.title === 'GALLERY')
      return mapSectionGridImg(ObjectSection as unknown as sectionGridImg);
  });
}

export function mapSectionTowColumns(section: sectionSobre) {
  const { title, descricao: description, img, metadata } = section;

  return {
    title,
    description,
    img: img.data.attributes.url,
    metadata,
  };
}

export function mapSectionContent(section: sectionContent) {
  const { title, decription: decryption, metadata } = section;

  const returnDescription = (data: typeof decryption) => {
    let returnData: string[] = [];

    data.forEach((description) => {
      let text = '';
      description.children.forEach((son) => {
        text += son.text;
      });
      if (text != '') returnData.push(text);
    });

    return returnData;
  };

  return {
    title,
    decryption: returnDescription(decryption),
    urlHead: metadata.id_title,
    background: metadata.backgroud,
  };
}

export function mapSectionGridText(section: sectionGridText) {
  const { title, description: decryption, metadata, img_grid, text_grid } = section;
  return {
    title,
    decryption,
    urlHead: metadata.id_title,
    background: metadata.backgroud,
    text_grid,
    img_url: img_grid[0].img.data.attributes.url,
  };
}

export function mapSectionGridImg(section: sectionGridImg) {
  const { title, description: decryption, metadata, img_grid } = section;
  return {
    title,
    decryption,
    urlHead: metadata.id_title,
    background: metadata.backgroud,
    img: img_grid.map((e) => ({ url: e.img.data.attributes.url, altText: 'imagem-GALLERY' })),
  };
}
