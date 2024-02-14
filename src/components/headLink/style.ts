import { tv } from 'tailwind-variants';

export const style = tv({
  base: 'text-lg font-bold p-4 relative after:bg-red-500 after:absolute after:bottom-2 after:h-1 after:w-0 after:rounded-full after:left-2/4 after:-translate-x-[0%] after:ease-in after:duration-300 hover:after:w-2/4 hover:after:-translate-x-[50%]',
});
