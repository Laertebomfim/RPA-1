import { tv } from 'tailwind-variants';

export const style = tv({
  base: '',
  variants: {
    color: {
      true: 'bg-white text-black',
      false: 'bg-black text-white',
    },
  },
});
