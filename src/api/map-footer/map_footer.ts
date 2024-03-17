export type footerType = [
  {
    type: string;
    children: [
      {
        text: string;
        type: string;
      },
    ];
  },
];
export default function mapFooter(dataFooter: footerType) {
  return {
    text: dataFooter[0].children[0].text,
  };
}
