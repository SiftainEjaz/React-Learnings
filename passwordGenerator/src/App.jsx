import { useState,useCallback,useEffect,useRef } from "react";


function App() {
  
  const [length,setLength] = useState(8);
  const [numberCheck,setNumberCheck] = useState(false);
  const [characterCheck,setCharacterCheck] = useState(false);
  const [password,setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(function(){


    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberCheck)
      str += "0123456789";

    if(characterCheck)
      str += "~`!@#$%^&*_+|?/<>";

    for(let i=0;i<length;i++)
    {
      let randomIndex = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(randomIndex);
    }

    setPassword(pass);

  },[length,numberCheck,characterCheck]);

  const copyPasswordToClipboard = useCallback(()=>{
    
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    alert("Copied to Clipboard!");

  },[password]);

  useEffect(()=>{
    
    passwordGenerator()
  },[length,numberCheck,characterCheck,passwordGenerator]);


  return (
    
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-black-500 bg-gray-700">
          <h1 className="text-4xl text-white text-center my-3">Password Generator</h1>
          <div className='flex shadow-lg overflow-hidden mb-4'>
            <input type="text" 
              value={password}
              className="outline-none w-full py-1 px-3 bg-white"
              placeholder="Password"
              ref={passwordRef}
              readOnly 
            />
            <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
          </div>

          <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">

              <input type="range"
                min={8}
                max={50}
                value={length}
                className="cursor-pointer"
                onChange={(e) => setLength(e.target.value)}
              />
              <label className="text-white">Length : {length}</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input 
                type="checkbox"
                defaultChecked={numberCheck}
                id='numberInput'
                onChange={()=>{
                  setNumberCheck(prevNumberCheck => !prevNumberCheck);
                }}
              />
              <label className="text-white">Numbers</label>
            </div>

            <div className="flex items-center gap-x-1">
              <input 
                type="checkbox"
                defaultChecked={characterCheck}
                id='characterInput'
                onChange={()=>{
                  setCharacterCheck(prevCharacterCheck => !prevCharacterCheck);
                }}
              />
              <label className="text-white">Characters</label>
            </div>

          </div>
      </div>
    </>
  )
}

export default App
