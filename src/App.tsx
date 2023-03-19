import { useState } from 'react';
// components
import { Title } from './components/Title';
import { Button } from './components/Button';
import { Result } from './components/Result';
// utils
import { data } from './utils/data';
import { Omikuji, ButtonProps } from './utils/type';

const App = () => {
  const [omikuji, setOmikuji] = useState<Omikuji>({
    name: '',
    description: '',
  });
  return (
    // JSX
    <div className='main'>
      <Title title='Omikuji' />
      <Button name='Draw' setOmikuji={setOmikuji} />
    </div>
  );
};

export default App;
