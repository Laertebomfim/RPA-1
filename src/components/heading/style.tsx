import { tv } from 'tailwind-variants';

export const styleHead = tv({
  base: 'font-bold',
  variants: {
    colo: {
      true: 'text-white',
      false: 'text-black',
    },
    size: {
      big: 'text-4xl md:text-6xl',
      medium: 'text-4xl',
      small: 'text-3xl',
    },
    uppercase: {
      true: 'uppercase',
      false: 'lowercase',
    },
  },
  defaultVariants: {
    colo: true,
    size: 'medium',
  },
});
