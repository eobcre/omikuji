// utils
import { data } from '../utils/data';
import { ButtonProps, Omikuji } from '../utils/type';

export const Button = (props: ButtonProps) => {
  // click
  const clickHandler = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const omikujiNum: Omikuji = data[randomIndex];
    props.setOmikuji(omikujiNum);
  };
  return (
    // JSX
    <>
      <button onClick={clickHandler}>{props.name}</button>
    </>
  );
};
