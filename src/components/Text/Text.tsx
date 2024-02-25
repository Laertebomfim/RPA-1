import { ReactNode } from 'react';
import { style } from './style';

type TextProps = {
  children?: ReactNode;
  colorBool?: boolean;
  fontFamily?: 'Montserrat' | 'Open_Sans';
  size?: 'base' | 'lg' | 'xl';
  weight?: 'normal' | 'semibold' | 'bold';
};
export default function Text({
  children,
  colorBool = true,
  fontFamily = 'Open_Sans',
  size = 'base',
  weight = 'normal',
}: TextProps) {
  return (
    <p
      className={style({ color: colorBool, font: fontFamily, font_Size: size, font_weith: weight })}
      dangerouslySetInnerHTML={{ __html: typeof children === 'string' && children }}
    ></p>
  );
}
