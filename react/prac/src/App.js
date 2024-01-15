import { Button } from './Button';
import title from './Title.module.css';
function App() {
  return (
    <div className="App">
      <h1 className={title.title}>hi</h1>
      <Button text={'hi'} />
    </div>
  );
}

export default App;
