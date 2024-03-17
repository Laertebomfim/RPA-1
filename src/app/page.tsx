'use client';
import GridSection from '@/components/gridSecton';
import Base from '@/template/base';
import { mock } from '@/template/base/mock';
import { mock as mockSection } from '@/components/gridSecton/mock';
import { useEffect, useState } from 'react';
import { dataMap, datatype } from '@/api/data-menu/data-map';

export default function Home() {
  const [data, setData] = useState<datatype | {}>({});
  useEffect(() => {
    const load = async () => {
      const dataApi = await fetch('http://localhost:1337/api/pages/2/?populate=deep').then((e) =>
        e.json(),
      );
      setData(dataMap(dataApi.data.attributes));
    };
    load();
  }, []);

  return (
    <>
      <Base information={mock.information} link="" text="logo" textFooter="end site">
        <GridSection {...mockSection} />
      </Base>
    </>
  );
}
