import Title from '../heading/Title';
import SectionContent from '../sectionContent/Section';
import './style.css';

type GridTextProps = {
  background: boolean;
  html: string;
  TitleText: string;
};
export default function GridText({ background, TitleText, html }: GridTextProps) {
  return (
    <SectionContent backgroundBoolean={background}>
      <div className="text-center max-w-[580px] mx-auto">
        <Title TitleCase={true} color={!background} size="medium" type="h2">
          {TitleText}
        </Title>
        <article dangerouslySetInnerHTML={{ __html: html }}></article>
      </div>
    </SectionContent>
  );
}
