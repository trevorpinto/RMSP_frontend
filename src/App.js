import logo from './logo.svg';
import image from './RMSP.png'
import './App.css';
import instance from './config';
import axios from 'axios'
import { useEffect, useState } from 'react'

console.log(image)

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

function headerPage(){
  return (<header className='headerPage'>
    <div className='logoContainer'>
        <img src = {image} className='logo'/>
      <h1 className="title">Rate my SFU Professor</h1>
    </div>
      <nav>
        <u1>
          <l1>
            <h3>About</h3>
          </l1>
          <l1>
            <h3>Learn More</h3>
          </l1>
        </u1>
      </nav>
    </header>
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
  return headerPage()
  // console.log(instance.defaults)
  // const testAPI = async() => {
  //   try{
  //     const response = await instance.get('');
  //     console.log(response.data);
  //   }
  //   catch(error){
  //     console.error(error);
  //   }
  // }
  // useEffect(() => {
  //   return Counter();
  // },[])

  //await getResponseFromAPI();
}

export default App;
