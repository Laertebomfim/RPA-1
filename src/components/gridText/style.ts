import { tv } from 'tailwind-variants';

export const styleArticle = tv({
  base: '[&_a]:text-red-500 [&_a]:hover:underline [&_a]:decoration-red-500 [&_ul]:py-10 [&_ol]:py-10 [&_p]:py-10 [&_p]:text-xl [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:uppercase [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:uppercase',
});
// style serve para se o componente receber uma html na string
