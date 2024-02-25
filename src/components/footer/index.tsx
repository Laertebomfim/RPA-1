import SectionContent from '../sectionContent/Section';

type FooterProps = {
  text: string;
  background: boolean;
};
export default function Footer({ text, background }: FooterProps) {
  return (
    <SectionContent backgroundBoolean={background}>
      <div
        className="[&_a]:text-lg text-center py-5 hover:[&_a]:underline underline-offset-[10px]"
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>
    </SectionContent>
  );
}
