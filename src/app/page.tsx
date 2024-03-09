'use client';

import GridSection from '@/components/gridSecton';
import Base from '@/template/base';
import { mock } from '@/template/base/mock';
import { mock as mockSection } from '@/components/gridSecton/mock';
export default function Home() {
  return (
    <>
      <Base information={mock.information} link="" text="logo" textFooter="end site">
        <GridSection {...mockSection} />
      </Base>
    </>
  );
}
