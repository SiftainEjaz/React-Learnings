import {useState} from 'react';
import './App.css';

function App() {
  //const [variable , setVarName (method that will control the value of variable)] = 
  // useState(DefaultValue of Variable)

  let [counter, setCounter] = useState(15);

  const increaseValue = () =>{
    setCounter(++counter);
    console.log("Value increased " + counter)
  }
  const decreaseValue = () =>{
    setCounter( () => {
      if(counter==0)
      {
        alert(`Counter has reached the lowest value : ${counter}`);
        return counter;
      }
      else
        return --counter;
    });
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter} </h2>
      <button onClick={increaseValue} >Increase Value {counter}</button> 
      <br />
      <button onClick={decreaseValue} >Decrease value {counter}</button>
      <p> Footer : {counter}</p>
    </>
  )
}

export default App
