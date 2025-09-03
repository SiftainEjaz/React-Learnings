import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-xl mb'>Tailwind Test</h1>
      <Card />
      <Card />
    </>
  )
}

export default App
