import React from 'react';
import { useState } from 'react';

function Count() {

    const [counter,setCounter] = useState(0);

    return (

        <>
            <h1>{counter}</h1>

            {/* <button onClick={()=>{

                setCounter(counter+1);
                setTimeout(()=>{
                    alert(counter);
                },3000);

            }}>Increase</button> */}

            <button
            onClick={()=>{
                setCounter(counter=>counter+1);
                setCounter(counter=>counter+1);
                setCounter(counter=>counter+1);
                
                console.log(counter);
            }} 
            >+3</button>


        </>
    )
      
}

export default Count
