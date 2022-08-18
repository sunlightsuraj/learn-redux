import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispath = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispath(increment(5))}>+</button>
          <button onClick={() => dispath(decrement(5))}>-</button>

          {isLogged ? <h3>Valuable Information I shoudn't se</h3> : ''}
    </div>
  );
}

export default App;
