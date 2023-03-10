// utils
import { TitleProps } from '../utils/type';
// icon
import MainIcon from '../assets/omikuji.png';

export const Title = (props: TitleProps) => {
  return (
    <div>
      <img src={MainIcon} alt='Icon' width='100' />
      <h2>{props.title}</h2>
    </div>
  );
};
