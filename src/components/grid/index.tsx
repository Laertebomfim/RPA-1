/* eslint-disable @next/next/no-img-element */
import Text from '../Text/Text';
import Title from '../heading/Title';
import SectionContent from '../sectionContent/Section';
import { styleArticle, styleContainDiv } from './style';

type GridComponentProps = {
  background: boolean;
  textP: string;
  textTitle: string;
  img: string;
};
export default function GridComponent({ background, textP, textTitle, img }: GridComponentProps) {
  return (
    <SectionContent backgroundBoolean={background}>
      <article className={styleArticle()}>
        <div className={styleContainDiv()}>
          <Title TitleCase={true} color={!background} size="big" type="h1">
            {textTitle}
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
