import Title from '../heading/Title';
import SectionContent from '../sectionContent/Section';
import { styleArticle } from './style';

type GridTextProps = {
  background: boolean;
  text: string[];
  TitleText: string;
  sectionID: string;
  tableComponent:
    | {
        title_tible: [
          {
            id: number;
            colum_2: string;
            colum_3: string;
            colum_4: string;
            colum_5: string;
            colum_1: string;
          },
        ];
        data_colum_table: {
          id: number;
          colum_1: string;
          colum_2: string;
          colum_3: string;
          colum_4: string;
          colum_5: string;
        }[];
      }
    | undefined;
};

export default function GridText({
  background,
  TitleText,
  text,
  sectionID,
  tableComponent,
}: GridTextProps) {
  return (
    <SectionContent backgroundBoolean={background} sectionId={sectionID}>
      <div className="text-center max-w-[580px] mx-auto pt-16 px-10">
        <Title TitleCase={true} color={!background} size="big" type="h2">
          {TitleText}
        </Title>
        <article className={styleArticle()}>
          {text.map((element, inds) => (
            <p key={inds}>{element}</p>
          ))}
        </article>

        <article className="w-full  overflow-x-scroll">
          {!!tableComponent && (
            <table className="mx-auto">
              <thead className="[&_th]:border-solid [&_th]:border-2 [&_th] [&_th]:py-3 [&_th]:border-collapse">
                <tr>
                  <th>{tableComponent.title_tible[0].colum_1}</th>
                  <th>{tableComponent.title_tible[0].colum_2}</th>
                  <th>{tableComponent.title_tible[0].colum_3}</th>
                  <th>{tableComponent.title_tible[0].colum_4}</th>
                  <th>{tableComponent.title_tible[0].colum_5}</th>
                </tr>
              </thead>
              <tbody className="[&_td]:border-solid [&_td]:border-2 [&_td] [&_td]:py-3 [&_td]:border-collapse">
                {tableComponent.data_colum_table.map((e) => (
                  <tr key={e.id}>
                    <td>{e.colum_1}</td>
                    <td>{e.colum_2}</td>
                    <td>{e.colum_3}</td>
                    <td>{e.colum_4}</td>
                    <td>{e.colum_5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </article>
      </div>
    </SectionContent>
  );
}
