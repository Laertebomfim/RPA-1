import Title from '../heading/Title';
import SectionContent from '../sectionContent/Section';
import { styleArticle } from './style';

type GridTextProps = {
  background: boolean;
  text: string[];
  TitleText: string;
};

export default function GridText({ background, TitleText, text }: GridTextProps) {
  return (
    <SectionContent backgroundBoolean={background}>
      <div className="text-center max-w-[580px] mx-auto pt-16 px-10">
        <Title TitleCase={true} color={!background} size="big" type="h2">
          {TitleText}
        </Title>
        <article className={styleArticle()}>
          {text.map((element, inds) => (
            <p key={inds}>{element}</p>
          ))}
        </article>
      </div>
    </SectionContent>
  );
}
