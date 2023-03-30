import { ResetButtonProps } from '../utils/type';

export const ResetButton = (props: ResetButtonProps) => {
  const resetHandler = () => {};

  return (
    // JSX
    <>
      <button onClick={resetHandler}>{props.reset}</button>
    </>
  );
};
