// utils
import { ResultProps } from '../utils/type';

export const Result = (props: ResultProps) => {
  return (
    <div>
      {props.omikuji && (
        <div className='result'>
          <h1>{props.omikuji.name}</h1>
          <p>{props.omikuji.description}</p>
        </div>
      )}
    </div>
  );
};
