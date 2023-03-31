import { useState } from 'react';
// components
import { Title } from './components/Title';
import { Button } from './components/Button';
import { Result } from './components/Result';
// utils
import { Omikuji } from './utils/type';

const App = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const [omikuji, setOmikuji] = useState<Omikuji>({
    name: '',
    description: '',
  });

  return (
    // JSX
    <div className='main'>
      <Title title='Omikuji' />
      <Button
        name={buttonClicked ? 'Draw again?' : 'Draw'}
        setOmikuji={setOmikuji}
        setButtonClicked={setButtonClicked}
      />
      <Result omikuji={omikuji} />
    </div>
  );
};

export default App;
