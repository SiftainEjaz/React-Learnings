import React, { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <>
            
            <a href='https://google.com' target='_blank'>Click me</a>
        </>
    )
}

// const reactElement = {
//     type : 'a',
//     props : {
//         href : "https://google.com",
//         target : "_blank"
//     },
//     children : "Visit Google"
// }

const name1 = "Siftain Ejaz ";

const element = (
    <a href='https://google.com' target='_blank'>Click to Visit Google</a>
)

const reactElement = React.createElement(
    'a',
    {
        href : 'https://google.com' ,
        target : '_blank'
    },
    "Visit here ",
    name1
)

createRoot(document.getElementById('root')).render(
    reactElement
)
