import { useState } from 'react';
import { data } from '../utils/data';
import { Omikuji } from '../utils/type';

export const Button = () => {
  const [omikuji, setOmikuji] = useState<Omikuji>({
    name: '',
    description: '',
  });

  // click
  const clickHandler = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setOmikuji(data[randomIndex]);
  };
  return (
    <>
      <button onClick={clickHandler}>Draw</button>
      <div>
        {omikuji && (
          <div className='result'>
            <h1>{omikuji.name}</h1>
            <p>{omikuji.description}</p>
          </div>
        )}
      </div>
    </>
  );
};
