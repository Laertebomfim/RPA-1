import { ReactElement } from 'react';
import { style } from './style';

type SectionContentProps = {
  children: ReactElement;
  backgroundBoolean: boolean;
};
export default function SectionContent({ children, backgroundBoolean }: SectionContentProps) {
  return (
    <section className={style({ color: backgroundBoolean })}>
      <div className="max-w-screenMD mx-auto min-h-screen relative">{children}</div>
    </section>
  );
}
