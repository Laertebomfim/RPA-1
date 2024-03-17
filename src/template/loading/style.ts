import { tv } from 'tailwind-variants';

export const loadingStyle = tv({
  base: ' border-[10px] border-transparent rounded-full animate-loading',
  variants: {
    value: {
      father: 'border-y-red-600 w-full h-full flex justify-center items-center',
      son: 'border-x-red-600 w-2/4 h-2/4 ',
    },
  },
});
//
