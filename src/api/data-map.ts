export const dataMap = (
  Data: { footerHtml: string; slug: string; title: string; sections: Array<any>; menu: {} }[],
) => {
  const { footerHtml, menu, sections, slug, title } = Data[0];
  return {
    footerHtml: footerHtml,
    slug: slug,
    title: title,
    sections: sections,
    menu: menu,
  };
};
