import { useState } from 'react';
import Logo, { LogoProps } from '../LogoLInk/Logo';
import Nav, { linkPros } from '../Nav/Nav';
import SectionContent from '../sectionContent/Section';

import { styleArticle, style_div_container, style_div_father } from './style';
import Icon from '../menuIcon';

type HeadingMenuProps = LogoProps & {
  information: linkPros;
};

export default function HeadingMenu({ information, img, link, text }: HeadingMenuProps) {
  const [menuMobile, setMenuMobile] = useState(false);
  return (
    <>
      <Icon close_Open_func={setMenuMobile} close_Open_boolean={menuMobile} />

      <div className={style_div_father({ Visibility: menuMobile })} aria-label="menu-infor">
        <SectionContent backgroundBoolean={true}>
          <article className={styleArticle()} onClick={() => setMenuMobile(false)}>
            <div className={style_div_container()}>
              <Logo img={img} link={link} text={text} />
              <Nav link={information} />
            </div>
          </article>
        </SectionContent>
      </div>
    </>
  );
}
