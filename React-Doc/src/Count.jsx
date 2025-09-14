import React from 'react';
import { useState,useEffect,useRef } from 'react';

function Count() {

    // const [counter,setCounter] = useState(0);

    const ref = useRef(0);
    console.log(ref);

    useEffect(()=>{
            console.log("Count Component Rendered");
        });

    return (

        

        <>
            {/* <h1>{counter}</h1> */}

            {/* <button onClick={()=>{

                setCounter(counter+1);
                setTimeout(()=>{
                    alert(counter);
                },3000);

            }}>Increase</button> */}

            {/* <button
            onClick={()=>{
                setCounter(counter=>counter+1);
                setCounter(counter=>counter+1);
                setCounter(counter=>counter+1);
                
                console.log(counter);
            }} 
            >+3</button> */}

            {/* <p>Count: {counter}</p> */}
            <button onClick={()=>{
                ref.current = ref.current + 1;
                console.log(ref.current);
            }}>Add</button>


        </>
    )
      
}

export default Count
