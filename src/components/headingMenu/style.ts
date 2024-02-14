import { tv } from 'tailwind-variants';

export const styleArticle = tv({
  base: 'absolute top-0 left-0 w-full h-screen md:block md:h-auto z-0',
});

export const style_div_father = tv({
  base: 'md:block md:opacity-100',
  variants: {
    Visibility: {
      true: '',
      false: 'hidden opacity-0 ',
    },
  },
});

export const style_div_container = tv({
  base: 'flex flex-col pt-20 md:p-4 md:flex-row md:justify-between items-center gap-4 duration-300 ease-in',
});
