import { useEffect, useState } from 'react';
import { Button } from './Button';
import title from './Title.module.css';
function App() {
  const [state, setState] = useState(0);
  const onClick = () => setState((prev) => prev + 1);

  const [keyword, setKeyword] = useState('');

  const onChange = (event) => {
    console.log(`${keyword} -> ${event.target.value}`);
    setKeyword(event.target.value);
  };

  // input value에 따른 검색 API 호출
  useEffect(() => {
    if (keyword.length > 3) console.log(`search for ${keyword}`);
  }, [keyword]);

  useEffect(() => {
    console.log('i am called when "state" changed');
  }, [state]);

  const test = () => {
    console.log('i am called one time when first rendering');
  };

  useEffect(test, []);

  return (
    <div className="App">
      <input
        onChange={onChange}
        type="text"
        value={keyword}
        placeholder="press any thing"
      ></input>
      <h1 className={title.title}>hi</h1>
      <p>{state}</p>
      <Button onClick={onClick} text={'click me'} />
      {/* <Button text={'hi'} /> */}
    </div>
  );
}

export default App;
