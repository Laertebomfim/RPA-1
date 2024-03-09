import { tv } from 'tailwind-variants';

export const styleArticle = tv({
  base: 'w-full min-h-screen max-w-screenMD absolute top-0 left-0 flex flex-col items-center pt-20 gap-4 md:flex md:h-auto md:min-h-0 md:opacity-100 md:p-4 md:flex-row md:justify-between md:items-baseline md:mx-auto bg-white md:top-auto md:left-auto md:relative',
  variants: {
    Visibility: {
      true: '',
      false: 'hidden opacity-0 ',
    },
  },
});
