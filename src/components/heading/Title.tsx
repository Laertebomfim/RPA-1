'use client';

import { ReactNode } from 'react';
import { Element } from './Element';

type HeadProps = {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color: boolean;
  TitleCase: boolean;
  size: 'big' | 'small' | 'medium';
  children: ReactNode;
};

export default function Title({ children, type, color, size, TitleCase }: HeadProps) {
  return <>{Element[type](children, color, size, TitleCase)}</>;
}
