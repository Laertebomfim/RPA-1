/* eslint-disable no-unused-vars */
import { ReactElement, ReactNode } from 'react';
import { styleHead } from './style';

export type ElementType = {
  [key: string]: (
    text: string | ReactNode,
    color: boolean,
    textsize: 'big' | 'small' | 'medium',
    TitleCase: boolean,
  ) => ReactElement;
};

export const Element: ElementType = {
  h1: (text, coloB, textsize, TitleCase) => (
    <h1 className={styleHead({ colo: coloB, size: textsize, uppercase: TitleCase })}>{text}</h1>
  ),
  h2: (text, coloB, textsize, TitleCase) => (
    <h2 className={styleHead({ colo: coloB, size: textsize, uppercase: TitleCase })}>{text}</h2>
  ),
  h3: (text, coloB, textsize, TitleCase) => (
    <h3 className={styleHead({ colo: coloB, size: textsize, uppercase: TitleCase })}>{text}</h3>
  ),
  h4: (text, coloB, textsize, TitleCase) => (
    <h4 className={styleHead({ colo: coloB, size: textsize, uppercase: TitleCase })}>{text}</h4>
  ),
  h5: (text, coloB, textsize, TitleCase) => (
    <h5 className={styleHead({ colo: coloB, size: textsize, uppercase: TitleCase })}>{text}</h5>
  ),
  h6: (text, coloB, textsize, TitleCase) => (
    <h6 className={styleHead({ colo: coloB, size: textsize, uppercase: TitleCase })}>{text}</h6>
  ),
};
