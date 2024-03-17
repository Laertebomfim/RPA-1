import GridText from '@/components/gridText';
export default function Error404() {
  return (
    <>
      <GridText
        TitleText="error 404"
        background={false}
        html='A página que você busca não foi encontrada.<a href={"home"}>Clique para voltar</a>'
      ></GridText>
    </>
  );
}
