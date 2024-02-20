/* eslint-disable @next/next/no-img-element */
import Text from '../Text/Text';
import Title, { HeadProps } from '../heading/Title';
import SectionContent from '../sectionContent/Section';
import { styleArticle, styleContainDiv } from './style';

type GridComponentProps = HeadProps & {
  background: boolean;
  textP: string;
  img: string;
};
export default function GridComponent({
  background,
  TitleCase,
  size,
  type,
  textP,
  img,
  children,
}: GridComponentProps) {
  return (
    <SectionContent backgroundBoolean={background}>
      <article className={styleArticle()}>
        <div className={styleContainDiv()}>
          <Title TitleCase={TitleCase} color={!background} size={size} type={type}>
            {children}
          </Title>
          <Text colorBool={!background} size="xl">
            {textP}
          </Text>
        </div>
        <img src={img} alt="imagem de js , css" className="w-full h-full" />
      </article>
    </SectionContent>
  );
}
