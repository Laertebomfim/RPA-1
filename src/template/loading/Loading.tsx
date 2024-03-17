'use client';
import SectionContent from '../../components/sectionContent/Section';
import { loadingStyle } from './style';

type LoadingProps = {};
export default function Loading({}: LoadingProps) {
  return (
    <SectionContent backgroundBoolean={false}>
      <div className="absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] max-w-52 max-h-52 h-[50vw] w-2/4">
        <div className={loadingStyle({ value: 'father' })}>
          <div className={loadingStyle({ value: 'son' })}></div>
        </div>
      </div>
    </SectionContent>
  );
}
