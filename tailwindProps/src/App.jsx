import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx';

function App() {

  let obj = {
    name : "Saif",
    age : 27
  }

  let arr = [1,3,5,6];

  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-xl mb-6'>Tailwind Testing</h1>
      <Card username="Siftain Ejaz" designation = "Senior Systems Engineer"/>
      <Card username="Ejaz Ahmed" designation = "Railway Contractor"/> 
      <Card />
    </>
  )
}

export default App
