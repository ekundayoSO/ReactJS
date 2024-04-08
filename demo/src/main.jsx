import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const name = "Sulaimon Ekundayo";
const first_page = 2024;

/*
  // Regular JavaScript code with html*
const demo = (
  <div>
    <h1>Hello, my name is {name}</h1>
    <p>I have {2024 - first_page} years of experience building websites</p>
  </div>
)
*/

const Box = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Title: {props.title}</p>
      <p>Age: {props.age}</p>
    </div>
  )
}

/*Creating a Component in React*/
const Demo = () => {
  return (
    <div>
    <h1>Hello, my name is {name}</h1>
    <p>I have {2024 - first_page} years of experience building websites</p>
    <Box name="Sulaimon" title="CEO" age="30"/>
    <Box name="Elias" title="CTO" age="34"/>
    <Box name="Sane" title="CFO" age="37"/>
  </div>
  )
  }
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Render JavaScript with html on browser */}
    {/* {demo} */}

    {/* Render componet on web browser */}
    <Demo />
  </React.StrictMode>,
)
