import { useEffect, useState } from 'react';
import { Button } from './Button';
import title from './Title.module.css';
function App() {

  const [state, setState] = useState(0)
  const onClick = () => setState((prev) => prev+1)

  console.log('i am always called by changed state')

  const test = () => {
    console.log('i am called one time when first rendering')
  }

  useEffect(test, [])

  return (
    <div className="App">
      <h1 className={title.title}>hi</h1>
      <p>{state}</p>
      <Button onClick={onClick} text={'click me'}/>
      <Button text={'hi'} />
    </div>
  );
}

export default App;
