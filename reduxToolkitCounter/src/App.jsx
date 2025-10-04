import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {increment, incrementByAmount} from './features/counterSlice.js';
import './App.css'

function App() {
  
  //const {counter, setCounter} = useState(0);
  const dispatch = useDispatch();

  const clickHandlerIncrease = () => {
    dispatch(increment());
  }

  const clickHandlerIncreaseByAmount = () => {
    dispatch(incrementByAmount(5));
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value : {useSelector(state => state.counter)}</h2>
      <button onClick={clickHandlerIncrease}>Increase</button>
      <button onClick={clickHandlerIncreaseByAmount}>Increment By Amount</button>
    </>
  )
}

export default App
