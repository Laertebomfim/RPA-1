import { tv } from 'tailwind-variants';

export const styleArticle = tv({
  base: 'flex text-center md:text-left flex-col md:flex-row md:items-center gap-5 w-full h-screen p-10',
});
export const styleContainDiv = tv({
  base: 'md:max-w-80 [&_p]:py-10',
});
