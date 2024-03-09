import { styleFooter } from './style';

type FooterProps = {
  text: string;
  background: boolean;
};
export default function Footer({ text, background }: FooterProps) {
  return (
    <article
      className={styleFooter({ color: background })}
      dangerouslySetInnerHTML={{ __html: text }}
    ></article>
  );
}
