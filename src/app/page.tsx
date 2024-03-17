'use client';
import GridSection from '@/components/gridSecton';
import Base from '@/template/base';
import { mock } from '@/template/base/mock';
import { mock as mockSection } from '@/components/gridSecton/mock';
import { useEffect, useState } from 'react';
import { dataMap, datatype } from '@/api/data-menu/data-map';
import Error404 from '@/template/error-404/Error404';
import Loading from '@/template/loading/Loading';

export default function Home() {
  const [data, setData] = useState<datatype | {}>({});

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

  return (
    <>
      {Object.keys(data).length === 0 ? (
        <Loading />
      ) : Object.keys(data).length > 1 ? (
        <Base information={mock.information} link="" text="logo" textFooter="end site">
          <GridSection {...mockSection} />
        </Base>
      ) : (
        Object.keys(data).length === 1 && <Error404></Error404>
      )}
    </>
  );
}
