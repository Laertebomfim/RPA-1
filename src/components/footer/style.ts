import { tv } from 'tailwind-variants';

export const styleFooter = tv({
  base: '[&_a]:text-lg text-center py-5 hover:[&_a]:underline underline-offset-[10px] border-gray-500 border-t-2',
  variants: {
    color: {
      true: 'bg-white',
      false: 'bg-black',
    },
  },
});
