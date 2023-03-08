import { useState } from 'react';
import { data } from './utils/data';
// Icon
import MainIcon from './assets/omikuji.png';

function App() {
  const [omikuji, setOmikuji] = useState({ name: '', description: '' });

  // Click function
  const clickHandler = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setOmikuji(data[randomIndex]);
  };

  return (
    // JSX
    <div className='main'>
      <img src={MainIcon} alt='Icon' width='100' />
      <h2>Omikuji</h2>
      <button onClick={clickHandler}>Draw</button>
      {omikuji && (
        <div className='result'>
          <h1>{omikuji.name}</h1>
          <p>{omikuji.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
