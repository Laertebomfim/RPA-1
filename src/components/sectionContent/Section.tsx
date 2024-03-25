import { ReactElement } from 'react';
import { style } from './style';

type SectionContentProps = {
  children: ReactElement;
  backgroundBoolean: boolean;
  sectionId: string;
};

const createId = () => `id-${Math.random() * 1000}`;

export default function SectionContent({
  children,
  backgroundBoolean,
  sectionId,
}: SectionContentProps) {
  const ID = sectionId ? sectionId : createId();
  return (
    <section className={style({ color: backgroundBoolean })} id={ID}>
      <div className="max-w-screenMD mx-auto min-h-screen relative">{children}</div>
    </section>
  );
}
