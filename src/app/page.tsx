'use client';
import Base from '@/template/base';
import { useEffect, useState } from 'react';
import { dataMap, returnDataType } from '@/api/data-menu/data-map';
import Error404 from '@/template/error-404/Error404';
import Loading from '@/template/loading/Loading';
import GridComponent from '@/components/grid';
import GridText from '@/components/gridText';

export default function Home() {
  const [data, setData] = useState<returnDataType | {}>({});

  useEffect(() => {
    const load = async () => {
      try {
        const dataApi = await fetch('http://localhost:1337/api/pages/2/?populate=deep').then((e) =>
          e.json(),
        );
        setData(dataMap(dataApi.data.attributes));
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

  const [resultAbout, sectionDescriptin] = sections;
  console.log(sectionDescriptin);
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
      />
      <GridText
        TitleText={sectionDescriptin.title}
        background={sectionDescriptin.background}
        text={sectionDescriptin.decryption}
      />
    </Base>
  );
}
