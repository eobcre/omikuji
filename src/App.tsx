import { useState } from 'react';
import MainIcon from './assets/omikuji.png';

function App() {
  const [omikuji, setOmikuji] = useState('Draw a fortune slip.');

  const clickHandler = () => {};

  return (
    <div className='main'>
      <img src={MainIcon} alt='Icon' width='70' />
      <h2>Omikuji</h2>
      <button>Draw</button>
    </div>
  );
}

export default App;
