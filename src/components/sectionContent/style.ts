import { tv } from 'tailwind-variants';

export const style = tv({
  base: 'max-w-screenMD mx-auto min-h-screen relative',
  variants: {
    color: {
      true: 'bg-white text-black',
      false: 'bg-black text-white',
    },
  },
});
