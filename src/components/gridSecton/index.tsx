import Title from '../heading/Title';
import SectionContent from '../sectionContent/Section';
import { styleGrid, styleH3, styleSpan } from './style';

type GridSectionProps = {
  background: boolean;
  TitleText: string;
  descriptionP: string;
  grid: {
    Title: string;
    description: string;
  }[];
};
export default function GridSection({
  background,
  TitleText,
  descriptionP,
  grid,
}: GridSectionProps) {
  return (
    <SectionContent backgroundBoolean={background}>
      <div>
        <Title TitleCase={true} color={!background} size="big" type="h2">
          {TitleText}
        </Title>

        <p className="text-xl mt-5 mb-12">{descriptionP}</p>

        <div className={styleGrid()}>
          {grid.map((e, i) => (
            <div key={i}>
              <div className="relative ">
                <h3 className={styleH3()}>{e.Title}</h3>
                <span className={styleSpan()}>{i + 1}</span>
              </div>
              <p className="text-lg pt-5 leading-8">{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionContent>
  );
}
