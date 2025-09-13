import './App.css';
import Count from './Count.jsx';

function AlertButton({message,children})
{

  console.log("Hello");
  return (
    <>
      <button onClick={()=>alert(message)}>{children}</button>
    </>
  )
}

function App() {

  return (
    <>
      {/* <AlertButton message="Music is playing">Play Music</AlertButton>
      <AlertButton message="Video is playing">Play Video</AlertButton> */}

      <Count />
    </>
  )
}

export default App
