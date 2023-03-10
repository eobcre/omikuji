// components
import { Title } from './components/Title';
import { Button } from './components/Button';

const App = () => {
  return (
    // JSX
    <div className='main'>
      <Title title='Omikuji' />
      <Button name='Draw' />
    </div>
  );
};

export default App;
