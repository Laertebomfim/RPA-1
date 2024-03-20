import { useState } from 'react';
import Nav, { linkPros } from '../Nav/Nav';

import { styleArticle } from './style';
import Icon from '../menuIcon';
import Logo from '../LogoLInk/Logo';

export type HeadingMenuProps = {
  information: linkPros;
  logoImgUrl?: string;
  logoLink: string;
  logoText?: string;
};

export default function HeadingMenu({
  information,
  logoImgUrl,
  logoLink,
  logoText,
}: HeadingMenuProps) {
  const [menuMobile, setMenuMobile] = useState(false);
  return (
    <>
      <Icon close_Open_func={setMenuMobile} close_Open_boolean={menuMobile} />

      <article
        className={styleArticle({ Visibility: menuMobile })}
        onClick={() => setMenuMobile(false)}
        aria-label="menu-big"
      >
        <Logo img={logoImgUrl} link={logoLink} text={logoText} />
        <Nav link={information} />
      </article>
    </>
  );
}
