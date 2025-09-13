import {useState} from 'react';
import './App.css';

function App() {

  // let counter = 15;
  const [counter, setCounter] = useState(15);

  function increaseCounter(){
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
    console.log("Value increased" ,counter);
  }

  function decreaseCounter(){
    setCounter(counter-1);
    console.log("Value decreased" , counter);
  }

  return (
    <>
      <h1>Hello</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={increaseCounter}>Increase Value : {counter}</button>
      <br />
      <button onClick={decreaseCounter}>Decrease Value : {counter}</button>
      <p>Footer : {counter}</p>
    </>
  )
}

export default App
