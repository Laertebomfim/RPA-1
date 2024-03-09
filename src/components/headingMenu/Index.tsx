import { useState } from 'react';
import Logo, { LogoProps } from '../LogoLInk/Logo';
import Nav, { linkPros } from '../Nav/Nav';

import { styleArticle } from './style';
import Icon from '../menuIcon';

export type HeadingMenuProps = LogoProps & {
  information: linkPros;
};

export default function HeadingMenu({ information, img, link, text }: HeadingMenuProps) {
  const [menuMobile, setMenuMobile] = useState(false);
  return (
    <>
      <Icon close_Open_func={setMenuMobile} close_Open_boolean={menuMobile} />

      <article
        className={styleArticle({ Visibility: menuMobile })}
        onClick={() => setMenuMobile(false)}
        aria-label="menu-big"
      >
        <Logo img={img} link={link} text={text} />
        <Nav link={information} />
      </article>
    </>
  );
}
