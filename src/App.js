import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Name = () => {
  const name = useSelector(state => state.nameReducer.name);

  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch({
      type: 'UPDATE_NAME',
      payload: e.target.value,
    })
  };

  return (
    <>
      <div>Name: {name}</div>
      <input placeholder='your name here' onChange={handleNameChange}></input>
    </>
  );
};

const App = () => {
  const count = useSelector(state => state.countReducer.count);

  const dispatch = useDispatch();
  const incrementCounter = () => dispatch({ type: 'INCREMENT_COUNTER' });
  const decrementCounter = () => dispatch({ type: 'DECREMENT_COUNTER' });

  return (
    <>
      <div>
        Counter: {count}
      </div>
      <button onClick={decrementCounter}>-</button>
      <button onClick={incrementCounter}>+</button>
      <Name />
    </>
  );
};

export default App;
