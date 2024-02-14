import { ReactNode } from 'react';
import LinkComponent from '../headLink/Link';
import { style } from './style';

export type linkPros = { children: ReactNode; http: string; newtab?: '_blank' | '_self' }[];
type NavProps = {
  link: linkPros;
};
export default function Nav({ link }: NavProps) {
  return (
    <nav className={style()}>
      {link.map((object, inds) => (
        <LinkComponent key={inds} http={object.http} newtab={object.newtab}>
          {object.children}
        </LinkComponent>
      ))}
    </nav>
  );
}
