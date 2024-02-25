import { tv } from 'tailwind-variants';

export const style = tv({
  base: '',
  variants: {
    color: {
      true: 'text-white',
      false: 'text-black',
    },
    font: {
      Montserrat: 'font-montserrat',
      Open_Sans: 'font-open_Sans',
    },
    font_Size: {
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    font_weith: {
      normal: 'font-normal',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
});
