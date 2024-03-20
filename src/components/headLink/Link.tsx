import Link from 'next/link';
import { ReactNode } from 'react';
import { style } from './style';

type LinkProps = {
  children: ReactNode;
  http: string;
  newtab?: '_blank' | '_self' | string;
};
export default function LinkComponent({ children, http, newtab }: LinkProps) {
  return (
    <>
      <Link href={http} target={newtab} className={style()}>
        {children}
      </Link>
    </>
  );
}
