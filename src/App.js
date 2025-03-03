import logo from './logo.svg';
import './App.css';
import instance from './config';
import axios from 'axios'
import { useEffect, useState } from 'react'

function Counter(){
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

// async function GetResponseFromAPI(){
//   console.log(instance)
//   console.log('after instance reached here')
//   try{
//     const response = await axios.get(instance)
//     return;
//   }
//   catch(error){
//     console.error(error)
//     return;
//   }

//   useEffect(() => {
//     GetResponseFromAPI();
//   },[])
// }

function App() {
  console.log(instance.defaults)
  const testAPI = async() => {
    try{
      const response = await instance.get('');
      console.log(response.data);
    }
    catch(error){
      console.error(error);
    }
  }
  useEffect(() => {
    testAPI();
  },[])

  //await getResponseFromAPI();
}

export default App;
