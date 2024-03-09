import TopButton from '../../components/topButton';
import HeadingMenu, { HeadingMenuProps } from '../../components/headingMenu/Index';
import { ReactNode } from 'react';
import Footer from '../../components/footer';

export type BaseProps = HeadingMenuProps & {
  children: ReactNode;
  textFooter: string;
};
export default function Base({ children, information, img, text, link, textFooter }: BaseProps) {
  return (
    <>
      <header className="bg-white sticky top-0 z-10">
        <HeadingMenu information={information} img={img} text={text} link={link}></HeadingMenu>
      </header>
      <main>
        {children}
        <TopButton background={false} />
      </main>
      <footer>
        <Footer background={true} text={textFooter} />
      </footer>
    </>
  );
}
