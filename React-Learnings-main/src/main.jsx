import React, { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <>
            <h1>Custom MyApp !</h1>
        </>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href : "http://google.com",
//         target : "_link"
//     },
//     children : "Click to open Google"
// }

const user = "Siftain Ejaz";

const reactElement = React.createElement(
    'a',
    {
        href : 'http://google.com',
        target : '_blank'
    },
    'Click to Open Google ',
    user
)

const anotherElement = (
    <a href='http://google.com' target='_Blank'>Open Google</a>
)

createRoot(document.getElementById('root')).render(
  
    reactElement
)
