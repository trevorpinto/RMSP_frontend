import logo from './logo.svg';
import './App.css';
import instance from './config';
import axios from 'axios'
import { useState } from 'react'

function counter(){
  const [count, setCounter] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCounter(count + 1)}>
        Click Me!
      </button>
    </div>
  )
}

async function getResponseFromAPI(){
  try{
    const response = axios.get(instance)
    console.log(response)
  }
  catch(error){
    console.error(error)
  }
}

async function App() {
  counter();

  //await getResponseFromAPI();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
