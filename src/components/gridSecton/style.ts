import { tv } from 'tailwind-variants';

export const styleGrid = tv({
  base: 'grid grid-cols-[repeat(1,_minmax(200px,_1fr))] gap-8 md:grid-cols-[repeat(auto-fill,_minmax(360px,_1fr))]',
});

export const styleH3 = tv({
  base: 'relative left-10 text-2xl font-bold',
});

export const styleSpan = tv({
  base: ' absolute text-5xl -top-4 font font-bold rotate-6',
});
