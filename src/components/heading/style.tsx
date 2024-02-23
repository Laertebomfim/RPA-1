import { tv } from 'tailwind-variants';

export const styleHead = tv({
  base: 'font-black font-montserrat',
  variants: {
    colo: {
      true: 'text-white',
      false: 'text-black',
    },
    size: {
      big: 'text-3xl md:text-5xl',
      medium: 'text-3xl',
      small: 'text-2xl',
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
