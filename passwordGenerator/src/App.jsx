import { useState, useCallback } from 'react'

function App() {
  const [length,setLength] = useState(8);
  const [enableNumbers,setEnableNumber] = useState(false);
  const [enableCharacters,setEnableCharacters] = useState(false);
  const [password, setPassword] = useState("");

  
  const passwordGenerator = useCallback(()=>{

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(enableNumbers)
      str += "0123456789";

    if(enableCharacters)
      str += "~`!@#$%^&*()_-+={}[]:?";

    for(let i = 1;i <= length;i++)
    {
      let randomIndex = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(randomIndex);
            
    }

    setPassword(pass);

  },[length,enableNumbers,enableCharacters]);



  return (
    <div className='w-full max-w-md mx-auto shadow-md 
    rounded-lg px-4 py-3 my-8 text-gray-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'> Password Generator </h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
        <input type="text" 
          value={password} 
          className='outline-none w-full py-1 px-3'
          placeholder='Password' />
          <button className='outline-none bg-blue-700 text-white
          px-3 py-0.5 shrink-0'>
            Copy</button>
      </div>
    </div>
  )
}

export default App
