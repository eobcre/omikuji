// utils
import { data } from '../utils/data';
import { ButtonProps, Omikuji } from '../utils/type';

const Button: React.FC<ButtonProps> = (props) => {
  // click button logic
  const clickHandler = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const omikujiNum: Omikuji = data[randomIndex];
    props.setOmikuji(omikujiNum);
    props.setButtonClicked(true);
  };

  return (
    <>
      <button onClick={clickHandler}>{props.name}</button>
    </>
  );
};

export default Button;
