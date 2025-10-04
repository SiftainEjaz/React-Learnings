import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {increment, incrementByAmount, decrement, reset} from './features/counterSlice.js';
import './App.css'

function App() {
  
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const clickHandlerIncrease = () => {
    dispatch(increment());
  }

  const clickHandlerIncreaseByAmount = () => {
    dispatch(incrementByAmount(Number(amount)));
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value : {useSelector(state => state.counter)}</h2>
      <div>
        <label>Enter Amount   </label>
          <input type='text' placeholder='Dynamic Increase' value={amount} 
            onChange={(e) => setAmount(e.target.value)}></input> <br />
      </div>
      

      <button onClick={clickHandlerIncrease}>Increase</button>
      <button onClick={clickHandlerIncreaseByAmount}>Increment By Amount</button>
      <button onClick={() => {dispatch(decrement())}}>Decrease</button>
      <button onClick={() => {dispatch(reset())}}>Reset</button>
    </>
  )
}

export default App
