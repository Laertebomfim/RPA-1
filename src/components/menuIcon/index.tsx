import { Dispatch, SetStateAction } from 'react';
import { style_div_menu } from './style';
import { AlignJustify, X } from 'lucide-react';

type IconProps = {
  close_Open_func: Dispatch<SetStateAction<boolean>>;
  close_Open_boolean: boolean;
};

export default function Icon({ close_Open_func, close_Open_boolean }: IconProps) {
  return (
    <div
      className={style_div_menu()}
      onClick={() => {
        close_Open_func((c) => !c);
      }}
      aria-label="menu-mobile"
    >
      {close_Open_boolean ? (
        <X color="white" size={30} strokeWidth={4} aria-label="close-menu" />
      ) : (
        <AlignJustify color="white" size={30} strokeWidth={4} aria-label="open-menu" />
      )}
    </div>
  );
}
