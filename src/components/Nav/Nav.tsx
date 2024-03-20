import { ReactNode } from 'react';
import LinkComponent from '../headLink/Link';
import { style } from './style';

export type linkPros = {
  children: ReactNode;
  http: string;
  newTab?: '_blank' | '_self' | string;
}[];
type NavProps = {
  link: linkPros;
};
export default function Nav({ link }: NavProps) {
  return (
    <nav className={style()}>
      {link.map((object, inds) => (
        <LinkComponent key={inds} http={object.http} newtab={object.newTab}>
          {object.children}
        </LinkComponent>
      ))}
    </nav>
  );
}
