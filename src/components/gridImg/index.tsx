/* eslint-disable @next/next/no-img-element */
import Title from '../heading/Title';
import SectionContent from '../sectionContent/Section';
import { styleGrid } from './style';

type GridImgProps = {
  background: boolean;
  TitleText: string;
  descriptionP: string;
  gridImg: {
    TitleAlt: string;
    srcImg: string;
  }[];
  sectionID: string;
};
export default function GridImg({
  background,
  TitleText,
  descriptionP,
  gridImg,
  sectionID,
}: GridImgProps) {
  return (
    <SectionContent backgroundBoolean={background} sectionId={sectionID}>
      <div className="p-10">
        <Title TitleCase={true} color={!background} size="big" type="h2">
          {TitleText}
        </Title>

        <p className="text-xl mt-5 mb-12">{descriptionP}</p>

        <div className={styleGrid()}>
          {gridImg.map((e, i) => (
            <div key={i} className="overflow-hidden w-full">
              <img
                className="hover:scale-125 hover:rotate-12 duration-150 w-full"
                src={e.srcImg}
                alt={e.TitleAlt}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionContent>
  );
}
