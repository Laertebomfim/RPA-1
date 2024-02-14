/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import Title from '../heading/Title';

export type LogoProps = {
  text: string;
  img: string;
  link: string;
};

export default function Logo({ img, text, link }: LogoProps) {
  return (
    <Title TitleCase={true} type="h1" color={false} size="medium">
      <Link href={link}>{img ? <img className="w-28" src={img} alt={text}></img> : text}</Link>
    </Title>
  );
}
