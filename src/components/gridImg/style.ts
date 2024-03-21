import { tv } from 'tailwind-variants';

export const styleGrid = tv({
  base: 'grid place-items-center grid-cols-[repeat(1,_minmax(200px,_1fr))] gap-8 md:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]',
});
