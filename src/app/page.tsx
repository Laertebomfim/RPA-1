'use client';
import { useEffect, useState } from 'react';

import { dataMap, returnDataType } from '@/api/data-menu/data-map';

import Error404 from '@/template/error-404/Error404';
import Base from '@/template/base';
import Loading from '@/template/loading/Loading';

import GridComponent from '@/components/grid';
import GridText from '@/components/gridText';
import GridSection from '@/components/gridSecton';
import GridImg from '@/components/gridImg';

export default function Home() {
  const [data, setData] = useState<returnDataType | {}>({});

  useEffect(() => {
    const load = async () => {
      try {
        const dataApi = await fetch('http://localhost:1337/api/pages/2/?populate=deep').then((e) =>
          e.json(),
        );
        setData(dataMap(dataApi.data.attributes));
        console.log(dataApi.data.attributes);
      } catch (error404) {
        console.error(error404);
        setData({ error: 'error' });
      }
    };

    load();
  }, []);
  if (Object.keys(data).length === 0) {
    return <Loading />;
  }
  if (Object.keys(data).length === 1) {
    return <Error404 />;
  }

  const { menu, sections } = data as returnDataType;

  const { links, img, link, text } = menu;

  const [
    resultAbout,
    sectionDescriptin,
    sectionGrid,
    sectionImg,
    sectionGridSecond,
    sectionDescriptinSecond,
  ] = sections;
  return (
    <Base
      information={links}
      logoLink={link}
      logoText={text}
      logoImgUrl={img}
      textFooter="end site"
    >
      <GridComponent
        background={resultAbout.metadata.backgroud}
        img={resultAbout.img}
        textP={resultAbout.description}
        textTitle={resultAbout.title}
        sectionID={resultAbout.metadata.id_title}
      />
      <GridText
        TitleText={sectionDescriptin.title}
        background={sectionDescriptin.background}
        text={sectionDescriptin.decryption}
        sectionID={sectionDescriptin.urlHead}
        tableComponent={sectionDescriptin.Table}
      />
      <GridSection
        TitleText={sectionGrid.title}
        background={sectionGrid.background}
        descriptionP={sectionGrid.decryption}
        grid={sectionGrid.text_grid}
        sectionID={sectionGrid.urlHead}
      />
      <GridImg
        TitleText={sectionImg.title}
        background={sectionImg.background}
        descriptionP={sectionImg.decryption}
        gridImg={sectionImg.img}
        sectionID={sectionImg.urlHead}
      />
      <GridSection
        TitleText={sectionGridSecond.title}
        background={sectionGridSecond.background}
        descriptionP={sectionGridSecond.decryption}
        grid={sectionGridSecond.text_grid}
        sectionID={sectionGridSecond.urlHead}
      />
      <GridText
        TitleText={sectionDescriptinSecond.title}
        background={sectionDescriptinSecond.background}
        text={sectionDescriptinSecond.decryption}
        sectionID={sectionDescriptinSecond.urlHead}
        tableComponent={sectionDescriptinSecond.Table}
      />
    </Base>
  );
}
// # # #contact
